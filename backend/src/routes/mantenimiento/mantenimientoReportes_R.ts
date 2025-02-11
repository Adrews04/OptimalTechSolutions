import express, { Request, Response } from "express";
import {
    marcarTareaHecha_C
} from "../../controllers/mantenimiento/mantenimientoReportes_C";

const mantenimientoReportesRouter = express.Router();

mantenimientoReportesRouter.put("/mantenimiento/reportes:id", marcarTareaHecha_C);

export default mantenimientoReportesRouter;