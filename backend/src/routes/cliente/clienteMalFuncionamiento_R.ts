import express, { Request, Response } from "express";
import { enviarMalFuncionamiento_C } from "../../controllers/cliente/clienteMalFuncionamiento_C";

const clienteMalFuncionamientoRouter = express.Router();

clienteMalFuncionamientoRouter.post("/cliente:id/malfuncionamiento:id", enviarMalFuncionamiento_C);

export default clienteMalFuncionamientoRouter;