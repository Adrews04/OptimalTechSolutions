import express from "express";

import {
    getCamaraById_C,
    getLuzDisponibles_C,
    getAguasDisponibles_C,
    getGasDisponible_C,
    toggleLuz_C,
    toggleAguas_C,
    toggleGas_C,
    getHistorialLuz_C,
    getHistorialAguas_C,
    getHistorialGas_C,
    getHistorialAccionesAutomaticas_C,
    getHistorialTemperatura_C,
    getCantidadPersonas_C,
    getHistorialPersonas_C,
    /* getPrediccionPersonas_C,
    getPrediccionAgua_C,
    getPrediccionLuz_C,
    getPrediccionGas_C,
    getPrediccionClima_C, */
    postAlerta_C,
    getAlertasProtocolosAccionables_C,
    getAlertasProtocolosActuales_C,
    getTemperatura_C,
    getConsumoAgua_C,
    getConsumoGas_C,
    getConsumoLuz_C,
    postLuz_C,
    postAguas_C,
    postGas_C
} from "../../controllers/admin/admCamara_C";


const admCamaraRouter = express.Router();

admCamaraRouter.get("/camara/:idZona", getCamaraById_C);
admCamaraRouter.get("/Luz/:idZona", getLuzDisponibles_C);
admCamaraRouter.get("/aguas/:idZona", getAguasDisponibles_C);
admCamaraRouter.get("/gas/:idZona", getGasDisponible_C);
admCamaraRouter.get("/temperatura/:idZona", getTemperatura_C);
admCamaraRouter.put("/Luz/toggle/:idZona/:idTuboLed", toggleLuz_C);
admCamaraRouter.post("/aguas/toggle/:idZona/:idSalida", toggleAguas_C);
admCamaraRouter.post("/gas/toggle/:idZona/:idSalida", toggleGas_C);
admCamaraRouter.get("/historial/Luz/:id/:idTuboLed", getHistorialLuz_C);
admCamaraRouter.get("/historial/aguas/:id/:idSalidaAgua", getHistorialAguas_C);
admCamaraRouter.get("/historial/gas/:id/:idSalidaGas", getHistorialGas_C);
admCamaraRouter.get("/historial/temperatura/:idZona", getHistorialTemperatura_C);
admCamaraRouter.get("/historial/acciones-automaticas/:idZona", getHistorialAccionesAutomaticas_C);
admCamaraRouter.get("/historial/personas/:idZona", getHistorialPersonas_C);
admCamaraRouter.get("/personas/actual/:idZona", getCantidadPersonas_C);
admCamaraRouter.get("/consumo/agua/:idZona/:idSalidaAgua", getConsumoAgua_C);
admCamaraRouter.get("/consumo/gas/:idZona/:idSalidaGas", getConsumoGas_C);
admCamaraRouter.get("/consumo/Luz/:idZona/:idTuboLed", getConsumoLuz_C);
/* admCamaraRouter.get("/personas/prediccion/:id", getPrediccionPersonas_C);
admCamaraRouter.get("/agua/prediccion/:id", getPrediccionAgua_C);
admCamaraRouter.get("/Luz/prediccion/:id", getPrediccionLuz_C);
admCamaraRouter.get("/gas/prediccion/:id", getPrediccionGas_C);
admCamaraRouter.get("/clima/prediccion/:id", getPrediccionClima_C); */
admCamaraRouter.post("/alertas/accionar/:id", postAlerta_C);
admCamaraRouter.get("/alertas/protocolos-accionables/:idZona", getAlertasProtocolosAccionables_C);


admCamaraRouter.post("/alertas/agregar", postAlerta_C);
admCamaraRouter.post("/Luz/agregar/:idZona", postLuz_C);
admCamaraRouter.post("/aguas/agregar/:idZona", postAguas_C);
admCamaraRouter.post("/gas/agregar/:idZona", postGas_C);


export default admCamaraRouter;
