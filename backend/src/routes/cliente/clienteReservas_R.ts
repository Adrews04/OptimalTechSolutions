import express, { Request, Response } from "express";
import {
    getDisponibilidades_C,
    getPrecios_C,
    getContactar_C,
    getReservar_C
} from "../../controllers/cliente/clienteReservas_C.js";

const clienteReservasRouter = express.Router();

clienteReservasRouter.get("/reservas/disponibilidades", getDisponibilidades_C);
clienteReservasRouter.get("/reservas/precios", getPrecios_C);
clienteReservasRouter.get("/reservas/contactar", getContactar_C);
clienteReservasRouter.post("/reservas/reservar:id", getReservar_C);

export default clienteReservasRouter;