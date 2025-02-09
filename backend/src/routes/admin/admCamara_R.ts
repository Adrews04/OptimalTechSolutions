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
    getAlertasProtocolosActuales_C
} from "../../controllers/admin/admCamara_C";

import {simularSensorLuz} from "../../simuladorSensores/sensorLuz";

const admCamaraRouter = express.Router();

admCamaraRouter.get("/camara/:id", getCamaraById_C);
admCamaraRouter.get("/luces/:idZona", getLucesDisponibles_C);
admCamaraRouter.get("/aguas/:idZona", getAguasDisponibles_C);
admCamaraRouter.get("/gas/:idZona", getGasDisponible_C);
admCamaraRouter.get("/climas/:idZona", getClimasDisponibles_C);
admCamaraRouter.post("/luces/toggle/agregarLuz", simularSensorLuz);
admCamaraRouter.put("/luces/toggle/:idZona/:idTuboLed", toggleLuces_C);
admCamaraRouter.post("/aguas/toggle/:idZona/:idSalidaAgua", toggleAguas_C);
admCamaraRouter.post("/gas/toggle/:idZona/:idSalidaGas", toggleGas_C);
admCamaraRouter.post("/climas/toggle/:idZona/:idClima", toggleClimas_C);
admCamaraRouter.get("/historial/luces/:id/:idTuboLed", getHistorialLuces_C);
admCamaraRouter.get("/historial/aguas/:id/:idSalidaAgua", getHistorialAguas_C);
admCamaraRouter.get("/historial/gas/:id/:idSalidaGas", getHistorialGas_C);
admCamaraRouter.get("/historial/climas/:id/:idClima", getHistorialClimas_C);
admCamaraRouter.get("/historial/acciones-automaticas/:idZona", getHistorialAccionesAutomaticas_C);
admCamaraRouter.get("/historial/personas/:idZona", getHistorialPersonas_C);
admCamaraRouter.get("/personas/actual/:idZona", getCantidadPersonas_C);
admCamaraRouter.get("/personas/prediccion:id", getPrediccionPersonas_C);
admCamaraRouter.get("/agua/prediccion:id", getPrediccionAgua_C);
admCamaraRouter.get("/luces/prediccion:id", getPrediccionLuces_C);
admCamaraRouter.get("/gas/prediccion:id", getPrediccionGas_C);
admCamaraRouter.get("/clima/prediccion:id", getPrediccionClima_C);
admCamaraRouter.get("/alertas/protocolos-accionables:id", getAlertasProtocolosAccionables_C);
admCamaraRouter.get("/alertas/protocolos-actuales:id", getAlertasProtocolosActuales_C);

export default admCamaraRouter;
