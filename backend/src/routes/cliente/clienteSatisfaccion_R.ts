import express, { Request, Response } from "express";
import {
    getHistorialReservas_C,
    enviarSatisfaccion_C
} from "../../controllers/cliente/clienteSatisfaccion_C";

const clienteSatisfaccionRouter = express.Router();

clienteSatisfaccionRouter.get("/historial/reservas", getHistorialReservas_C);
clienteSatisfaccionRouter.post("/reservas/satisfaccion/:id", enviarSatisfaccion_C);

export default clienteSatisfaccionRouter;