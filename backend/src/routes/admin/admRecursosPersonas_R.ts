import express, { Request, Response } from "express";
import {
    getHistorialAlertas_C,
    getHistorialAccionesAutomaticas_C,
    getRecursosAgua_C,
    getRecursosLuces_C,
    getRecursosGas_C,
    getRecursosClimas_C,
    getRecursosPersonas_C,
    getActualPersonas_C
} from "../../controllers/admin/admRecursosPersonas_C";

const admRecursosPersonasRouter = express.Router();

admRecursosPersonasRouter.get("/historial/alerta:id", getHistorialAlertas_C);
admRecursosPersonasRouter.get("/historial/acciones-automaticas:id", getHistorialAccionesAutomaticas_C);
admRecursosPersonasRouter.get("/recursos/agua", getRecursosAgua_C);
admRecursosPersonasRouter.get("/recursos/luces", getRecursosLuces_C);
admRecursosPersonasRouter.get("/recursos/gas", getRecursosGas_C);
admRecursosPersonasRouter.get("/recursos/climas", getRecursosClimas_C);
admRecursosPersonasRouter.get("/personas/total", getRecursosPersonas_C);
admRecursosPersonasRouter.get("/personas/actual", getActualPersonas_C);

export default admRecursosPersonasRouter;