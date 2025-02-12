import mqtt from 'mqtt';
import dotenv from 'dotenv';

dotenv.config();

const brokerUrl = process.env.MQTT_BROKER_URL || 'mqtt://localhost:1883';

console.log(`Intentando conectar a MQTT en: ${brokerUrl}`);

const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
  console.log('✅ Conectado al broker MQTT');
  client.subscribe('test/topic', (err) => {
    if (err) {
      console.error('❌ Error al suscribirse:', err);
    } else {
      console.log('📡 Suscrito al tópico: test/topic');
      client.publish('test/topic', 'Mensaje de prueba desde el backend');
    }
  });
});

client.on('message', (topic, message) => {
  console.log(`📩 Mensaje recibido en "${topic}": ${message.toString()}`);
  client.end();
});

client.on('error', (err) => {
  console.error('🚨 Error en MQTT:', err);
});
