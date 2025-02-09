import express from 'express';

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import mqttClient from './mqtt/mqttClient';

//import connectDb from './models/connectDB';
import admCamaraRouter from './routes/admin/admCamara_R'
import admCamarasRouter from './routes/admin/admCamaras_R'
import admInfraestructuraRouter from './routes/admin/admInfraestructura_R'
import admRecursosPersonasRouter from './routes/admin/admRecursosPersonas_R'
import admReportesRouter from './routes/admin/admReportes_R'
import admReservacionesRouter from './routes/admin/admReservaciones_R'
import clienteMalFuncionamientoRouter from './routes/cliente/clienteMalFuncionamiento_R'
import clienteReservasRouter from './routes/cliente/clienteReservas_R'
import clienteSatisfaccionRouter from './routes/cliente/clienteSatisfaccion_R'
import mantenimientoReportesRouter from './routes/mantenimiento/mantenimientoReportes_R'

import { simularSensorLuz } from './simuladorSensores/sensorLuz';
import { simularSensorAgua } from './simuladorSensores/sensorAgua';
import { simularSensorGas } from './simuladorSensores/sensorGas';
import { simularSensorClima } from './simuladorSensores/sensorClimas';
import { simularSensorMovimiento } from './simuladorSensores/sensorMovimiento';

dotenv.config();


const app = express();

app.use(express());

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

mongoose.connection.on('error', (err)=>{
  console.log(err.message)
})

mongoose.connection.on('disconnected', () =>{
  console.log()
  console.log('Mongoose disconnected')
})

process.on('SIGNINT', async ()=>{
  await mongoose.connection.close()
  process.exit(0)
})

connectDb();


mqttClient.init(); // Llama a la función de inicialización

app.use(admCamaraRouter);
app.use(admCamaraRouter);
app.use(admCamarasRouter);
app.use(admInfraestructuraRouter);
app.use(admRecursosPersonasRouter);
app.use(admReportesRouter);
app.use(admReservacionesRouter);
app.use(clienteMalFuncionamientoRouter);
app.use(clienteReservasRouter);
app.use(clienteSatisfaccionRouter);
app.use(mantenimientoReportesRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);

});

setInterval(simularSensorLuz, 3000);
setInterval(simularSensorAgua, 3000);
setInterval(simularSensorGas, 3000);
setInterval(simularSensorClima, 3000);
setInterval(simularSensorMovimiento, 3000);