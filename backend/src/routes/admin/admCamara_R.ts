import express from "express";

import {
    getCamaraById_C,
    getLucesDisponibles_C,
    getAguasDisponibles_C,
    getGasDisponible_C,
    getClimasDisponibles_C,
    toggleLuces_C,
    toggleAguas_C,
    toggleGas_C,
    toggleClimas_C,
    getHistorialLuces_C,
    getHistorialAguas_C,
    getHistorialGas_C,
    getHistorialClimas_C,
    getHistorialAccionesAutomaticas_C,
    getCantidadPersonas_C,
    getHistorialPersonas_C,
    getPrediccionPersonas_C,
    getPrediccionAgua_C,
    getPrediccionLuces_C,
    getPrediccionGas_C,
    getPrediccionClima_C,
    getAlertasProtocolosAccionables_C,
    getAlertasProtocolosActuales_C,
    getBotonesPaneles_C
} from "../../controllers/admin/admCamara_C.js";

const admCamaraRouter = express.Router();

admCamaraRouter.get("/camara:id", getCamaraById_C);
admCamaraRouter.get("/luces", getLucesDisponibles_C);
admCamaraRouter.get("/aguas", getAguasDisponibles_C);
admCamaraRouter.get("/gas", getGasDisponible_C);
admCamaraRouter.get("/climas", getClimasDisponibles_C);
admCamaraRouter.post("/luces/toggle:id", toggleLuces_C);
admCamaraRouter.post("/aguas/toggle:id", toggleAguas_C);
admCamaraRouter.post("/gas/toggle:id", toggleGas_C);
admCamaraRouter.post("/climas/toggle:id", toggleClimas_C);
admCamaraRouter.get("/historial/luces:id", getHistorialLuces_C);
admCamaraRouter.get("/historial/aguas:id", getHistorialAguas_C);
admCamaraRouter.get("/historial/gas:id", getHistorialGas_C);
admCamaraRouter.get("/historial/climas:id", getHistorialClimas_C);
admCamaraRouter.get("/historial/acciones-automaticas:id", getHistorialAccionesAutomaticas_C);
admCamaraRouter.get("/historial/personas:id", getHistorialPersonas_C);
admCamaraRouter.get("/personas/actual:id", getCantidadPersonas_C);
admCamaraRouter.get("/personas/prediccion:id", getPrediccionPersonas_C);
admCamaraRouter.get("/agua/prediccion:id", getPrediccionAgua_C);
admCamaraRouter.get("/luces/prediccion:id", getPrediccionLuces_C);
admCamaraRouter.get("/gas/prediccion:id", getPrediccionGas_C);
admCamaraRouter.get("/clima/prediccion:id", getPrediccionClima_C);
admCamaraRouter.get("/alertas/protocolos-accionables:id", getAlertasProtocolosAccionables_C);
admCamaraRouter.get("/alertas/protocolos-actuales:id", getAlertasProtocolosActuales_C);
admCamaraRouter.get("/botones/paneles:id", getBotonesPaneles_C);

export default admCamaraRouter;
