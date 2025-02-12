import express from 'express';

import dotenv from 'dotenv';
import mongoose, { set } from 'mongoose';
import mqttClient from './servicios/mqttClient';

//import connectDb from './models/connectDB';
import admCamaraRouter from './routes/admin/admCamara_R'
import admCamarasRouter from './routes/admin/admCamaras_R'
import admReservacionesRouter from './routes/admin/admReservaciones_R'
import clienteMalFuncionamientoRouter from './routes/cliente/clienteMalFuncionamiento_R'
import clienteReservasRouter from './routes/cliente/clienteReservas_R'
import clienteSatisfaccionRouter from './routes/cliente/clienteSatisfaccion_R'
import mantenimientoReportesRouter from './routes/mantenimiento/mantenimientoReportes_R'

import { simularSensorLuz } from './simuladorSensores/sensorLuz';
import { simularSensorAgua } from './simuladorSensores/sensorAgua';
import { simularSensorGas } from './simuladorSensores/sensorGas';
import { simularSensorTemperatura } from './simuladorSensores/sensorTemperatura';
import { simularSensorMovimiento } from './simuladorSensores/sensorMovimiento';
import { simularSensorHuella } from './simuladorSensores/sensorHuellaDactilar';

dotenv.config();


const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

// Conexión a MongoDB
const connectDb = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL environment variable is not defined");
    }
    const database = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB at ${database.connection.host}:${database.connection.port}`);
  } catch (error) {
    console.error("Failed to connect to the database", error);
    process.exit(1); // Exit the process with an error code
  }
};

mongoose.connection.on('error', (err) => {
  console.log(err.message)
})

mongoose.connection.on('disconnected', () => {
  console.log()
  console.log('Mongoose disconnected')
})

process.on('SIGNINT', async () => {
  await mongoose.connection.close()
  process.exit(0)
})

connectDb();


mqttClient.init(); // Llama a la función de inicialización

app.use(admCamaraRouter);
app.use(admCamaraRouter);
app.use(admCamarasRouter);
app.use(admReservacionesRouter);
app.use(clienteMalFuncionamientoRouter);
app.use(clienteReservasRouter);
app.use(clienteSatisfaccionRouter);
app.use(mantenimientoReportesRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);

});

// ---------------------- SENSORES DE LUZ ----------------------

setInterval(async () => { 
  await simularSensorLuz(1, 1); 
  await simularSensorLuz(1, 2); 
  await simularSensorLuz(1, 3); 
  await simularSensorLuz(1, 4);
  await simularSensorLuz(1, 5); 
  await simularSensorLuz(1, 6); 
  await simularSensorLuz(1, 7); 
          // ZONA 1
  await simularSensorLuz(2, 1); 
  await simularSensorLuz(2, 2); 
  await simularSensorLuz(2, 3); 
  await simularSensorLuz(1, 4);
  await simularSensorLuz(2, 5); 
  await simularSensorLuz(2, 6); 
  await simularSensorLuz(2, 7); 
          // ZONA 3
  await simularSensorLuz(3, 1); 
  await simularSensorLuz(3, 2); 
  await simularSensorLuz(3, 3); 
  await simularSensorLuz(3, 4);
  await simularSensorLuz(3, 5); 
  await simularSensorLuz(3, 6); 
  await simularSensorLuz(3, 7); 
          // ZONA 4
  await simularSensorLuz(4, 1); 
  await simularSensorLuz(4, 2); 
  await simularSensorLuz(4, 3); 
  await simularSensorLuz(4, 4);
  await simularSensorLuz(4, 5); 
  await simularSensorLuz(4, 6); 
  await simularSensorLuz(4, 7);
          // ZONA 5
  await simularSensorLuz(5, 1); 
  await simularSensorLuz(5, 2); 
  await simularSensorLuz(5, 3); 
  await simularSensorLuz(5, 4);
  await simularSensorLuz(5, 5); 
  await simularSensorLuz(5, 6); 
  await simularSensorLuz(5, 7);
          // ZONA 6
  /* await simularSensorLuz(6, 1); 
  await simularSensorLuz(6, 2); 
  await simularSensorLuz(6, 3); 
  await simularSensorLuz(6, 4);
  await simularSensorLuz(6, 5); 
  await simularSensorLuz(6, 6); 
  await simularSensorLuz(6, 7); */

}, 40000);

// ---------------------- SENSORES DE AGUA ----------------------


setInterval(async () => {
              //ZONA 1
  await simularSensorAgua(1, 1);
  await simularSensorAgua(1, 2);
  await simularSensorAgua(1, 3);
  await simularSensorAgua(1, 4);
  await simularSensorAgua(1, 5);
  await simularSensorAgua(1, 6);
  await simularSensorAgua(1, 7);

              //ZONA 2
  await simularSensorAgua(2, 1);
  await simularSensorAgua(2, 2);
  await simularSensorAgua(2, 3);
  await simularSensorAgua(2, 4);
  await simularSensorAgua(2, 5);
  await simularSensorAgua(2, 6);
  await simularSensorAgua(2, 7);

              //ZONA 3
  await simularSensorAgua(3, 1);
  await simularSensorAgua(3, 2);
  await simularSensorAgua(3, 3);
  await simularSensorAgua(3, 4);
  await simularSensorAgua(3, 5);
  await simularSensorAgua(3, 6);
  await simularSensorAgua(3, 7);

              //ZONA 4
  await simularSensorAgua(4, 1);
  await simularSensorAgua(4, 2);
  await simularSensorAgua(4, 3);
  await simularSensorAgua(4, 4);
  await simularSensorAgua(4, 5);
  await simularSensorAgua(4, 6);
  await simularSensorAgua(4, 7);

              //ZONA 5
  await simularSensorAgua(5, 1);
  await simularSensorAgua(5, 2);
  await simularSensorAgua(5, 3);
  await simularSensorAgua(5, 4);
  await simularSensorAgua(5, 5);
  await simularSensorAgua(5, 6);
  await simularSensorAgua(5, 7);

              //ZONA 6
  /* await simularSensorAgua(6, 1);
  await simularSensorAgua(6, 2);
  await simularSensorAgua(6, 3);
  await simularSensorAgua(6, 4);
  await simularSensorAgua(6, 5);
  await simularSensorAgua(6, 6);
  await simularSensorAgua(6, 7); */
}, 40000);


// ---------------------- SENSORES DE GAS ----------------------

setInterval(async () => {
              //ZONA 1
  await simularSensorGas(1, 1);
  await simularSensorGas(1, 2);
  await simularSensorGas(1, 3);
  await simularSensorGas(1, 4);
  await simularSensorGas(1, 5);
  await simularSensorGas(1, 6);
  await simularSensorGas(1, 7);

              //ZONA 2    
  await simularSensorGas(2, 1);
  await simularSensorGas(2, 2);
  await simularSensorGas(2, 3);
  await simularSensorGas(2, 4);
  await simularSensorGas(2, 5);
  await simularSensorGas(2, 6);
  await simularSensorGas(2, 7);

              //ZONA 3    
  await simularSensorGas(3, 1);
  await simularSensorGas(3, 2);
  await simularSensorGas(3, 3);
  await simularSensorGas(3, 4);
  await simularSensorGas(3, 5);
  await simularSensorGas(3, 6);
  await simularSensorGas(3, 7);

              //ZONA 4    
  await simularSensorGas(4, 1);
  await simularSensorGas(4, 2);
  await simularSensorGas(4, 3);
  await simularSensorGas(4, 4);
  await simularSensorGas(4, 5);
  await simularSensorGas(4, 6);
  await simularSensorGas(4, 7);

              //ZONA 5    
  await simularSensorGas(5, 1);
  await simularSensorGas(5, 2);
  await simularSensorGas(5, 3);
  await simularSensorGas(5, 4);
  await simularSensorGas(5, 5);
  await simularSensorGas(5, 6);
  await simularSensorGas(5, 7);

              //ZONA 6    
  /* await simularSensorGas(6, 1);
  await simularSensorGas(6, 2);
  await simularSensorGas(6, 3);
  await simularSensorGas(6, 4);
  await simularSensorGas(6, 5);
  await simularSensorGas(6, 6);  
  await simularSensorGas(6, 7); */
}, 40000)

// ---------------------- SENSORES DE TEMPERATURA ----------------------

setInterval(async () => {
              //ZONA 1
  await simularSensorTemperatura(1);
  await simularSensorTemperatura(2);
  await simularSensorTemperatura(3);
  await simularSensorTemperatura(4);
  await simularSensorTemperatura(5);
  await simularSensorTemperatura(6);

}, 40000); 

// ---------------------- SENSORES DE MOVIMIENTO ----------------------
setInterval(async () => {
  //ZONA 1
await simularSensorMovimiento(1);
await simularSensorMovimiento(2);
await simularSensorMovimiento(3);
await simularSensorMovimiento(4);
await simularSensorMovimiento(5);
await simularSensorMovimiento(6);

}, 40000);

// ---------------------- SENSORES DE HUELLA ----------------------
setInterval(async () => {
  //ZONA 1
  await simularSensorHuella(1);
  
  //ZONA 2
  await simularSensorHuella(2);
  
  //ZONA 3
  await simularSensorHuella(3);
  
  //ZONA 4
  await simularSensorHuella(4);
  
  //ZONA 5
  await simularSensorHuella(5);
  
  //ZONA 6
  await simularSensorHuella(6);

}, 40000);
