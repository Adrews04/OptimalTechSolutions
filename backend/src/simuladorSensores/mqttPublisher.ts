import * as mqtt from 'mqtt';

const cliente = mqtt.connect('mqtt://localhost:1883');

cliente.on('connect', () => {
  console.log('Conectado a Mosquitto');
});

export function publishData(topic: string, message: string): void {
  cliente.publish(topic, message, (err) => {
    if (err) {
      console.error('Error al publicar el mensaje:', err);
    } else {
      console.log(`Mensaje publicado en ${topic}: ${message}`);
    }
  });
}
