Componentes:
Backend en TypeScript (Express).
Microservicio de Forecasting (Python/Flask con Prophet).
Microservicio de Visión Computacional (Python/Flask con OpenCV/MediaPipe).
Frontend en React.
A continuación se detallan los pasos y las instalaciones necesarias para cada parte.

1. Requisitos Generales
Git: Para clonar el repositorio.
Node.js y npm: Para el backend en TypeScript y el frontend en React. Descárgalos de nodejs.org.
Python (versión 3.8 o superior): Para los microservicios en Python.
Entornos Virtuales: Se usarán para aislar las dependencias de cada microservicio Python (forecast_service y cv_service).

2. Instrucciones de Instalación y Configuración
A. Clonar el Repositorio
Clona el repositorio:
git clone [https://github.com/tu_usuario/mi-proyecto.git](https://github.com/Adrews04/OptimalTechSolutions.git)
cd codigo

B. Configurar el Backend en TypeScript (Express)
Navega a la carpeta backend:
cd backend
Instala las dependencias:
npm install
Configura el archivo .env en backend (crea el archivo si no existe) con variables como:
env
MONGO_URL = "mongodb://127.0.0.1:27017/ProyectoOptimalTechSolutions"

PORT=3000

MQTT_BROKER_URL=mqtt://localhost:1883

FORECAST_API_URL=http://127.0.0.1:5000/forecast

Ejecuta el backend:
npm start

C. Configurar el Microservicio de Forecasting (Python/Flask)
Navega a la carpeta forecast_service:
cd ../ServicioForecast

Crea y activa el entorno virtual:
python -m venv venv

En Windows:
venv\Scripts\activate
En Linux/Mac:
source venv/bin/activate

Crea un archivo requirements.txt (si no existe) e incluye:
nginx
Flask
prophet
pandas
matplotlib

Instala las dependencias:
pip install -r requirements.txt

Asegúrate de que el archivo CSV se encuentre en data/sensores.csv con las columnas requeridas (ds, sensor_type, zone, sensor_id, y).
Ejecuta el microservicio:
python forecasting.py
El servicio se iniciará en el puerto 5000.

D. Configurar el Microservicio de Visión Computacional (Python/Flask)
Navega a la carpeta cv_service:
cd ../ServicioCV

Crea y activa el entorno virtual:
python -m venv venv

Crea un archivo requirements.txt e incluye:
nginx
Flask
opencv-python
mediapipe
numpy
paho-mqtt
pillow

Instala las dependencias:
pip install -r requirements.txt

Configura el archivo .env en cv_service (si necesitas definir variables, por ejemplo, para MQTT).
Ejecuta el microservicio:
python hand_gesture.py
El servicio se ejecutará en el puerto 6000.

E. Configurar el Frontend en React
Navega a la carpeta frontend:

cd ../frontend
Instala las dependencias adicionales
npm install axios

Ejecuta el frontend:

npm start
El frontend se abrirá en tu navegador (por defecto en http://localhost:3000, aunque puede variar).

RESUMEN:
Clonar el repositorio y seguir la estructura del proyecto.
Configurar y activar entornos virtuales para los microservicios Python (forecast_service y cv_service).
Instalar las dependencias en cada carpeta:
Backend: npm install
Forecast Service: pip install -r requirements.txt
CV Service: pip install -r requirements.txt
Frontend: npm install
Configurar archivos .env en cada subproyecto con las variables necesarias.
Ejecutar cada componente:
Forecast Service: python app.py (Puerto 5000)
CV Service: python app.py (Puerto 5001)
Backend: npm start (o npm run dev, en el puerto definido, por ejemplo, 3000)
Frontend: npm start

