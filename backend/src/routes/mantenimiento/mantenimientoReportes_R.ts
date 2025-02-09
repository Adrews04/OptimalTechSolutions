import express, { Request, Response } from "express";
import {
    getReportesActivos_C,
    marcarTareaHecha_C
} from "../../controllers/mantenimiento/mantenimientoReportes_C";

const mantenimientoReportesRouter = express.Router();

mantenimientoReportesRouter.get("/mantenimiento/reportes/activos", getReportesActivos_C);
mantenimientoReportesRouter.put("/mantenimiento/reportes:id", marcarTareaHecha_C);

export default mantenimientoReportesRouter;