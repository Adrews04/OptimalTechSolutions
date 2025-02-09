import express, { Request, Response } from "express";
import {
    getReservacionesProximas_C,
    getReservacionesPasadas_C,
    getReservacionesActivas_C,
    irCamaraReservacionesActivas_C,
    getBotonesPaneles_C
} from "../../controllers/admin/admReservaciones_C.js";

const admReservacionesRouter = express.Router();

admReservacionesRouter.get("/reservaciones/proximas", getReservacionesProximas_C);
admReservacionesRouter.get("/reservaciones/pasadas", getReservacionesPasadas_C);
admReservacionesRouter.get("/reservaciones/activas", getReservacionesActivas_C);
admReservacionesRouter.get("/camara:id", irCamaraReservacionesActivas_C);
admReservacionesRouter.get("/botones/paneles:id", getBotonesPaneles_C);

export default admReservacionesRouter;