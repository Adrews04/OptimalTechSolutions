import express from "express";

// Función para obtener la cámara por ID
const getCamaraById_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const camara = await CamaraModel.findById(req.params.id).lean();
        res.status(200).send(camara);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener las luces disponibles
const getLucesDisponibles_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const luces = await LucesModel.find().lean();
        res.status(200).send(luces);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener las aguas disponibles
const getAguasDisponibles_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const aguas = await AguasModel.find().lean();
        res.status(200).send(aguas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el gas disponible
const getGasDisponible_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const gas = await GasModel.find().lean();
        res.status(200).send(gas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener los climas disponibles
const getClimasDisponibles_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const climas = await ClimasModel.find().lean();
        res.status(200).send(climas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para activar/desactivar luces
const toggleLuces_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const updatedLuces = await LucesModel.findByIdAndUpdate(req.params.id, { active: req.body.active }, { new: true }).lean();
        res.status(200).send(updatedLuces);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para activar/desactivar aguas
const toggleAguas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const updatedAguas = await AguasModel.findByIdAndUpdate(req.params.id, { active: req.body.active }, { new: true }).lean();
        res.status(200).send(updatedAguas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para activar/desactivar gas
const toggleGas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const updatedGas = await GasModel.findByIdAndUpdate(req.params.id, { active: req.body.active }, { new: true }).lean();
        res.status(200).send(updatedGas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para activar/desactivar climas
const toggleClimas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const updatedClimas = await ClimasModel.findByIdAndUpdate(req.params.id, { active: req.body.active }, { new: true }).lean();
        res.status(200).send(updatedClimas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el historial de luces
const getHistorialLuces_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialLuces = await HistorialLucesModel.find().lean();
        res.status(200).send(historialLuces);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el historial de aguas
const getHistorialAguas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialAguas = await HistorialAguasModel.find().lean();
        res.status(200).send(historialAguas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el historial de gas
const getHistorialGas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialGas = await HistorialGasModel.find().lean();
        res.status(200).send(historialGas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el historial de climas
const getHistorialClimas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialClimas = await HistorialClimasModel.find().lean();
        res.status(200).send(historialClimas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el historial de acciones automáticas
const getHistorialAccionesAutomaticas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialAccionesAutomaticas = await HistorialAccionesAutomaticasModel.find().lean();
        res.status(200).send(historialAccionesAutomaticas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener la cantidad de personas
const getCantidadPersonas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const cantidadPersonas = await CantidadPersonasModel.find().lean();
        res.status(200).send(cantidadPersonas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el historial de personas
const getHistorialPersonas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialPersonas = await HistorialPersonasModel.find().lean();
        res.status(200).send(historialPersonas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener la predicción de personas
const getPrediccionPersonas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const prediccionPersonas = await PrediccionPersonasModel.find().lean();
        res.status(200).send(prediccionPersonas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener la predicción de agua
const getPrediccionAgua_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const prediccionAgua = await PrediccionAguaModel.find().lean();
        res.status(200).send(prediccionAgua);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener la predicción de luces
const getPrediccionLuces_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const prediccionLuces = await PrediccionLucesModel.find().lean();
        res.status(200).send(prediccionLuces);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener la predicción de gas
const getPrediccionGas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const prediccionGas = await PrediccionGasModel.find().lean();
        res.status(200).send(prediccionGas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener la predicción de clima
const getPrediccionClima_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const prediccionClima = await PrediccionClimaModel.find().lean();
        res.status(200).send(prediccionClima);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener alertas y protocolos accionables
const getAlertasProtocolosAccionables_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const alertasProtocolosAccionables = await AlertasProtocolosAccionablesModel.find().lean();
        res.status(200).send(alertasProtocolosAccionables);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener alertas y protocolos actuales
const getAlertasProtocolosActuales_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const alertasProtocolosActuales = await AlertasProtocolosActualesModel.find().lean();
        res.status(200).send(alertasProtocolosActuales);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener botones a demás paneles
const getBotonesPaneles_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const botonesPaneles = await BotonesPanelesModel.find().lean();
        res.status(200).send(botonesPaneles);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

export {
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
};