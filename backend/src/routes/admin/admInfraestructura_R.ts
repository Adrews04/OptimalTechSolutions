import express, { Request, Response } from "express";
import {
    getAlertasFallo_C,
    getAlertasPasadasFallo_C,
    irInformeAlerta_C,
    irCamaraZonaAlerta_C,
    getBotonesPaneles_C
} from "../../controllers/admin/admInfraestructura_C.js";

const admInfraestructuraRouter = express.Router();

admInfraestructuraRouter.get("/alertas/fallo:id", getAlertasFallo_C);
admInfraestructuraRouter.get("/alertas/fallo/pasadas", getAlertasPasadasFallo_C);
admInfraestructuraRouter.get("/alertas:id", irInformeAlerta_C);
admInfraestructuraRouter.get("/camara:id", irCamaraZonaAlerta_C);
admInfraestructuraRouter.get("/botones/paneles:id", getBotonesPaneles_C);

export default admInfraestructuraRouter;