import express, { Request, Response } from "express";
import {
    getReservacionesProximas_C,
    getReservacionesPasadas_C,
} from "../../controllers/admin/admReservaciones_C";

const admReservacionesRouter = express.Router();

admReservacionesRouter.get("/reservaciones/proximas", getReservacionesProximas_C);
admReservacionesRouter.get("/reservaciones/pasadas", getReservacionesPasadas_C);

export default admReservacionesRouter;