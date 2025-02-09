import express, { Request, Response } from "express";
import {
    getDisponibilidades_C,
    getContactar_C
} from "../../controllers/cliente/clienteReservas_C";

const clienteReservasRouter = express.Router();

clienteReservasRouter.get("/reservas/disponibilidades", getDisponibilidades_C);
clienteReservasRouter.get("/reservas/contactar", getContactar_C);

export default clienteReservasRouter;