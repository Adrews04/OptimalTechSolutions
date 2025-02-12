import cv2
import mediapipe as mp
import numpy as np
import paho.mqtt.client as mqtt
import os

# --- Configuración MQTT ---
MQTT_BROKER = os.getenv("MQTT_BROKER", "localhost")
MQTT_PORT = int(os.getenv("MQTT_PORT", 1883))
mqtt_topic = "cv/gestures"

mqtt_client = mqtt.Client()
mqtt_client.connect(MQTT_BROKER, MQTT_PORT, 60)
mqtt_client.loop_start()  # Inicia el bucle de red de MQTT

# --- Configuración MediaPipe Hands ---
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils

hands = mp_hands.Hands(
    static_image_mode=False,  # Modo video en tiempo real
    max_num_hands=1,
    min_detection_confidence=0.7,
    min_tracking_confidence=0.05
)

# --- Función para interpretar gestos ---
def interpretar_gestos(landmarks, image_shape):
    h, w, _ = image_shape

    pulgar  = np.array([landmarks[4].x * w,  landmarks[4].y * h])
    indice  = np.array([landmarks[8].x * w,  landmarks[8].y * h])
    medio   = np.array([landmarks[12].x * w, landmarks[12].y * h])
    anular  = np.array([landmarks[16].x * w, landmarks[16].y * h])
    menique = np.array([landmarks[20].x * w, landmarks[20].y * h])
    
    distancia_robo = np.linalg.norm(pulgar - indice)
    distancia_roto = np.linalg.norm(pulgar - medio)
    distancia_conglomeracion = np.linalg.norm(pulgar - anular)
    
    umbral_robo = 50
    umbral_roto = 50
    umbral_conglomeracion = 50

    if distancia_robo < umbral_robo and distancia_roto >= umbral_roto:
        return "gesto de robo"
    if distancia_roto < umbral_roto and distancia_robo >= umbral_robo:
        return "gesto de roto"
    if distancia_robo < umbral_robo and distancia_roto < umbral_robo and distancia_conglomeracion < umbral_conglomeracion:
        return "gesto de conglomeracion"
    return "ninguno"

# --- Configuración de la Grabación de Video ---
cap = cv2.VideoCapture(0)  # Capturar desde la cámara predeterminada

# Define el codec y crea el objeto VideoWriter
fourcc = cv2.VideoWriter_fourcc(*'XVID')
frame_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
output_file = 'output_video.avi'
out = cv2.VideoWriter(output_file, fourcc, 20.0, (frame_width, frame_height))

print("Iniciando procesamiento de video...")

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    # Convertir frame de BGR a RGB
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = hands.process(frame_rgb)

    gesto_detectado = ""
    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            # Dibujar los landmarks en el frame
            mp_drawing.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)
            # Interpretar el gesto
            gesto = interpretar_gestos(hand_landmarks.landmark, frame.shape)
            if gesto and gesto != "ninguno":
                gesto_detectado = gesto
                # Escribir el gesto sobre el frame
                cv2.putText(frame, gesto, (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
                # Publicar el gesto vía MQTT y salirse del bucle de detección (si lo deseas)
                mqtt_client.publish(mqtt_topic, gesto)
                print(f"Mensaje publicado en {mqtt_topic}: {gesto}")
                break

    # Grabar el frame procesado en el archivo de video
    out.write(frame)

    # Mostrar el frame en una ventana (opcional)
    cv2.imshow("Hand Gesture Recognition", frame)
    if cv2.waitKey(1) & 0xFF == 27:  # ESC para salir
        break

# Liberar recursos
cap.release()
out.release()
cv2.destroyAllWindows()
mqtt_client.loop_stop()
