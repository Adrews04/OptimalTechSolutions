import express, { Request, Response } from "express";
import {
    getReservacionesProximas_C,
    getReservacionesPasadas_C,
    getReservacionesActivas_C,
    irCamaraReservacionesActivas_C
} from "../../controllers/admin/admReservaciones_C";

const admReservacionesRouter = express.Router();

admReservacionesRouter.get("/reservaciones/proximas", getReservacionesProximas_C);
admReservacionesRouter.get("/reservaciones/pasadas", getReservacionesPasadas_C);
admReservacionesRouter.get("/reservaciones/activas", getReservacionesActivas_C);
admReservacionesRouter.get("/camara:id", irCamaraReservacionesActivas_C);

export default admReservacionesRouter;