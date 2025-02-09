import express, { Request, Response } from "express";
import {
    getAllCamaras_C,
    getCamaraById_C,
    getAlertaCamaraById_C,
    getAlertaCamaraHistorialById_C
} from "../../controllers/admin/admCamaras_C";

const admCamarasRouter = express.Router();

admCamarasRouter.get("/camaras", getAllCamaras_C);
admCamarasRouter.get("/camara:id", getCamaraById_C);
admCamarasRouter.get("/camara:id/alerta", getAlertaCamaraById_C);
admCamarasRouter.get("/camara:id/alerta/historial", getAlertaCamaraHistorialById_C);

export default admCamarasRouter;