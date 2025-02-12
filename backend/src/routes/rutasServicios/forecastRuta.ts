import { Router, Request, Response } from 'express';
import { getForecastGraph } from '../../servicios/servicioForecasting';

const rutaForecasting = Router();

/**
 * Endpoint para generar forecasting y obtener el nombre de la gráfica generada.
 * Se espera que el body contenga: sensor_type, zone, sensor_id y forecast_periods (opcional).
 */
rutaForecasting.post('/forecast', async (req: Request, res: Response) => {
  try {
    const result = await getForecastGraph();
    res.status(200).json("Graficas generadas correctamente");
  } catch (error) {
    res.status(500).json({ error: 'Error generating forecast' });
  }
});

export default rutaForecasting;
