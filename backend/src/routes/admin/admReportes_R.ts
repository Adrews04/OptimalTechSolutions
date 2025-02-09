import express, { Request, Response } from "express";
import {
    getHistorialReportes_C,
    getAnalisis_C,
    getPredicciones_C
} from "../../controllers/admin/admReportes_C.js";

const admReportesRouter = express.Router();

admReportesRouter.get("/histprial/reportes", getHistorialReportes_C);
admReportesRouter.get("/reportes/analisis", getAnalisis_C);
admReportesRouter.get("/reportes/predicciones", getPredicciones_C);

export default admReportesRouter;