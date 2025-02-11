
import express, { Request, Response } from "express";

import {
    postReservar_C
} from "../../controllers/cliente/clienteReservas_C";

import { getContactar_C } from "../../controllers/cliente/clienteMalFuncionamiento_C";

const clienteReservasRouter = express.Router();


clienteReservasRouter.post("/reservas/reservar", postReservar_C);
clienteReservasRouter.get("/reservas/contactar", getContactar_C);

export default clienteReservasRouter;