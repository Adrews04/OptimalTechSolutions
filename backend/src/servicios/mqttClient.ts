// src/mqtt/mqttClient.ts
import mqtt from 'mqtt';
import dotenv from 'dotenv';
import LucesModel from '../models/admin/Luz';
import AguasModel from '../models/admin/aguas';
import GasModel from '../models/admin/gas';
import ClimasModel from '../models/admin/temperatura';
import PersonasModel from '../models/admin/personas';
import HuellaModel from '../models/admin/huella';


dotenv.config();

const brokerUrl = process.env.MQTT_BROKER_URL || 'mqtt://localhost:1883';

const mqttClient = {
  client: null as mqtt.MqttClient | null,

  init() {
    // Conectar al broker MQTT
    this.client = mqtt.connect(brokerUrl);
    console.log(`Conectando a MQTT en ${brokerUrl}...`);

    // Al conectar, suscribirse al tópico de datos de luz
    this.client.on('connect', () => {
      console.log('✅ Conectado al broker MQTT (cliente integrado)');
      this.client?.subscribe('sensors/luz', (err) => {
        if (err) {
          console.error('❌ Error al suscribirse a sensors/luz:', err);
        } else {
          console.log('📡 Suscrito a sensors/luz');
        }
        this.client?.subscribe('sensors/agua', (err) => {
          if (err) {
            console.error('❌ Error al suscribirse a sensors/agua:', err);
          } else {
            console.log('📡 Suscrito a sensors/agua');
          }
        });
        this.client?.subscribe('sensors/gas', (err) => {
          if (err) {
            console.error('❌ Error al suscribirse a sensors/gas:', err);
          } else {
            console.log('📡 Suscrito a sensors/gas');
          }
        });
        this.client?.subscribe('sensors/climas', (err) => {
          if (err) {
            console.error('❌ Error al suscribirse a sensors/climas:', err);
          } else {
            console.log('📡 Suscrito a sensors/climas');
          }
        });
        this.client?.subscribe('sensors/movimiento', (err) => {
          if (err) {
            console.error('❌ Error al suscribirse a sensors/movimiento:', err);
          } else {
            console.log('📡 Suscrito a sensors/movimiento');
          } 
        });
        });
      });

      // Procesar los mensajes recibidos
      this.client.on('message', async (topic, message) => {
        switch (topic) {
          case 'sensors/luz':
            console.log(`📩 Mensaje recibido en "${topic}": ${message.toString()}`);
            try {
              // Parsear el mensaje JSON recibido
              const data = JSON.parse(message.toString());
              // Crear una nueva instancia usando el modelo LucesModel
              const newRegistroLuz = new LucesModel({
                consumoLuz: data.consumoLuz,             // Valor numérico
                hora: data.hora ? new Date(data.hora) : new Date(),  // Convertir a Date o usar la fecha actual
                idZona: data.idZona,                       // Identificador de zona
                idTuboLed: data.idTuboLed                  // Identificador de la salida o tubo LED
              });
              // Guardar en MongoDB
              await newRegistroLuz.save();
              console.log('✅ Datos de sensor (luz) almacenados en MongoDB');
            } catch (error) {
              console.error('❌ Error al almacenar datos de sensor (luz):', error);
            }
            break;
          case 'sensors/agua':
            console.log(`📩 Mensaje recibido en "${topic}": ${message.toString()}`);
            try {
              // Parsear el mensaje JSON recibido
              const data = JSON.parse(message.toString());
              // Crear una nueva instancia usando el modelo AguasModel
              const newRegistroAgua = new AguasModel({
                consumoAgua: data.consumoAgua,             // Valor numérico
                hora: data.hora ? new Date(data.hora) : new Date(),  // Convertir a Date o usar la fecha actual
                idZona: data.idZona,                       // Identificador de zona
                idSalidaAgua: data.idSalidaAgua            // Identificador de la salida de agua
              });
              // Guardar en MongoDB
              await newRegistroAgua.save();
              console.log('✅ Datos de sensor (agua) almacenados en MongoDB');
            } catch {
              console.error('❌ Error al almacenar datos de sensor (agua):', Error);
            }
            break;
          case 'sensors/gas':
            console.log(`📩 Mensaje recibido en "${topic}": ${message.toString()}`);
            try {
              // Parsear el mensaje JSON recibido
              const data = JSON.parse(message.toString());
              // Crear una nueva instancia usando el modelo GasModel
              const newRegistroGas = new GasModel({
                consumoGas: data.consumoGas,             // Valor numérico
                hora: data.hora ? new Date(data.hora) : new Date(),  // Convertir a Date o usar la fecha actual
                idZona: data.idZona,                       // Identificador de zona
                idSalidaGas: data.idSalidaGas            // Identificador de la salida de gas
              });
              // Guardar en MongoDB
              await newRegistroGas.save();
              console.log('✅ Datos de sensor (gas) almacenados en MongoDB');
            } catch {
              console.error('❌ Error al almacenar datos de sensor (gas):', Error);
            }
            break;
          case 'sensors/climas':
            console.log(`📩 Mensaje recibido en "${topic}": ${message.toString()}`);
            try {
              // Parsear el mensaje JSON recibido
              const data = JSON.parse(message.toString());
              // Crear una nueva instancia usando el modelo ClimasModel
              const newRegistroClima = new ClimasModel({
                consumoElectrico: data.consumoElectrico,             // Valor numérico
                consumoGas: data.consumoGas,             // Valor numérico
                hora: data.hora ? new Date(data.hora) : new Date(),  // Convertir a Date o usar la fecha actual
                idZona: data.idZona,                       // Identificador de zona
                idClima: data.idClima            // Identificador de la salida de gas
              });
              // Guardar en MongoDB
              await newRegistroClima.save();
              console.log('✅ Datos de sensor (clima) almacenados en MongoDB');
            } catch {
              console.error('❌ Error al almacenar datos de sensor (clima):', Error);
            }
            break;
          case 'sensors/movimiento':
            console.log(`📩 Mensaje recibido en "${topic}": ${message.toString()}`);
            try {
              // Parsear el mensaje JSON recibido
              const data = JSON.parse(message.toString());
              // Crear una nueva instancia usando el modelo PersonasModel
              const newRegistroPersonas = new PersonasModel({
                cantidadPersonas: data.cantidadPersonas,             // Valor numérico
                hora: data.hora ? new Date(data.hora) : new Date(),  // Convertir a Date o usar la fecha actual
                idZona: data.idZona,                       // Identificador de zona
              });
              // Guardar en MongoDB
              await newRegistroPersonas.save();
              console.log('✅ Datos de sensor (personas) almacenados en MongoDB');
            } catch { console.log("Error en el mensaje de personas") }
            break;
          case 'sensors/huella':
              console.log(`📩 Mensaje recibido en "${topic}": ${message.toString()}`);
              try {
                // Parsear el mensaje JSON recibido
                const data = JSON.parse(message.toString());
                // Crear una nueva instancia usando el modelo HuellaModel
                const newRegistroHuella = new HuellaModel({
                  usuario: data.usuario,             // Valor numérico
                  hora: data.hora ? new Date(data.hora) : new Date(),  // Convertir a Date o usar la fecha actual
                  idZona: data.idZona,                       // Identificador de zona
                });
                // Guardar en MongoDB
                await newRegistroHuella.save();
                console.log('✅ Datos de sensor (huella) almacenados en MongoDB');
              } catch { console.log("Error en el mensaje de huella") }
            break;
        }
      });

      // Manejo de errores en la conexión MQTT
      this.client.on('error', (err) => {
        console.error('🚨 Error en MQTT (cliente integrado):', err);
      });
    }
};

  export default mqttClient;
