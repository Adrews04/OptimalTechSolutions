import express from 'express';
import connectDb from './models/connectDB.js';
import admCamaraRouter from './routes/admin/admCamara_R.js'
import admCamarasRouter from './routes/admin/admCamaras_R.js'
import admInfraestructuraRouter from './routes/admin/admInfraestructura_R.js'
import admRecursosPersonasRouter from './routes/admin/admRecursosPersonas_R.js'
import admReportesRouter from './routes/admin/admReportes_R.js'
import admReservacionesRouter from './routes/admin/admReservaciones_R.js'
import clienteMalFuncionamientoRouter from './routes/cliente/clienteMalFuncionamiento_R.js'
import clienteReservasRouter from './routes/cliente/clienteReservas_R.js'
import clienteSatisfaccionRouter from './routes/cliente/clienteSatisfaccion_R.js'
import mantenimientoReportesRouter from './routes/mantenimiento/mantenimientoReportes_R.js'

connectDb()
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

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
  console.log(`Backend listo en el puerto ${port}`);
});

app.get('/', (req, res) => {
  res.send('Backend listo');
});