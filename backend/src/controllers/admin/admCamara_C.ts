import express from "express";

import CamaraModel from "../../models/admin/camara";
import LucesModel from "../../models/admin/luces";
import AguasModel from "../../models/admin/aguas";
import GasModel from "../../models/admin/gas";
import ClimasModel from "../../models/admin/climas";
import PersonasModel from "../../models/admin/personas";
import AlertasProtocolosAccionablesModel from "../../models/admin/alertasProtocolosAccionables";
import { simularSensorLuz } from "../../simuladorSensores/sensorLuz";
import { simularSensorAgua } from "../../simuladorSensores/sensorAgua";
import { simularSensorGas } from "../../simuladorSensores/sensorGas";
import { simularSensorClima } from "../../simuladorSensores/sensorClimas";

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
const getLucesDisponibles_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const luces = await LucesModel.find({ idZona: req.params.idZona }).lean();
        res.status(200).send(luces);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener las aguas disponibles
const getAguasDisponibles_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const aguas = await AguasModel.find({ idZona: req.params.idZona }).lean();
        res.status(200).send(aguas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el gas disponible
const getGasDisponible_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const gas = await GasModel.find({ idZona: req.params.idZona }).lean();
        res.status(200).send(gas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener los climas disponibles
const getClimasDisponibles_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const climas = await ClimasModel.find({ idZona: req.params.idZona }).lean();
        res.status(200).send(climas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

const toggleLuces_C = async (req: express.Request, res: express.Response) => {
    try {
        const gastoActual = await LucesModel.findOne({ idZona: req.params.idZona, idTuboLed: req.params.idTuboLed }).lean();

        if (!gastoActual) {
            res.status(404).json({ message: "Luz no encontrada" });
        }
        else {
            const estado = gastoActual.consumoLuz > 0;

            //await simularSensorLuz(estado);

            res.status(200).json({ estado });  // Enviar la respuesta JSON}
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor" });  // Asegurar que siempre haya respuesta
    }
};


// Función para activar/desactivar aguas
const toggleAguas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { idZona, idSalidaAgua } = req.params;
        const gastoActual = await AguasModel.findOne({ idZona: idZona, idSalidaAgua: idSalidaAgua }).lean();
        if (!gastoActual) {
            res.status(404).send({ message: "Agua no encontrada" });
        } else {
            const estado = gastoActual.consumoAgua > 0 ? true : false;  // Si el gasto actual es mayor a 0, el agua está activada
            if (estado) {
                simularSensorAgua();
            }
            res.status(200).send(estado);
        }
    } catch (error) {
        if (error instanceof Error) {
            next(error);  // Usar next para pasar el error al middleware de manejo de errores
        }
    }
};

// Función para activar/desactivar gas
const toggleGas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const gastoActual = await GasModel.findOne({ idZona: req.params.idZona, idSalidaGas: req.params.idSalidaGas }).lean();
        if (!gastoActual) {
            res.status(404).send({ message: "Gas no encontrado" });
        } else {
            const estado = gastoActual.consumoGas > 0 ? true : false;  // Si el gasto actual es mayor a 0, el gas está activado
            if (estado) {
                simularSensorGas();
            }
            res.status(200).send(estado);
        }
    } catch (error) {
        if (error instanceof Error) {
            next(error);  // Usar next para pasar el error al middleware de manejo de errores
        }
    }
};

// Función para activar/desactivar climas
const toggleClimas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const gastoActual = await ClimasModel.findOne({ idZona: req.params.idZona, idClima: req.params.idClima }).lean();
        if (!gastoActual) {
            res.status(404).send({ message: "Clima no encontrado" });
        } else {
            const estado = gastoActual.consumoElectrico > 0 || gastoActual.consumoGas > 0 ? true : false;  // Si el gasto actual es mayor a 0, el clima está activado
            if (estado) {
                simularSensorClima();
            }
            res.status(200).send(estado);
        }
    } catch (error) {
        if (error instanceof Error) {
            next(error);  // Usar next para pasar el error al middleware de manejo de errores
        }
    }
};

// Función para obtener el historial de luces
const getHistorialLuces_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialLuces = await LucesModel.find({ idZona: req.params.idZona, idTuboLed: req.params.idTuboLed }).lean();
        if (!historialLuces) {
            res.status(404).send({ message: "Historial de luces no encontrado" });
        } else {
            res.status(200).send(historialLuces);
        }
    } catch (error) {
        if (error instanceof Error) {
            next(error);
        }
    }
};

// Función para obtener el historial de aguas
const getHistorialAguas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialAguas = await AguasModel.find({ idZona: req.params.idZona, idSalidaAgua: req.params.idSalidaAgua }).lean();
        if (!historialAguas) {
            res.status(404).send({ message: "Historial de aguas no encontrado" });
        } else {
            res.status(200).send(historialAguas);
        }
    } catch (error) {
        if (error instanceof Error) {
            next(error);
        }
    }
};

// Función para obtener el historial de gas
const getHistorialGas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialGas = await GasModel.find({ idZona: req.params.idZona, idSalidaGas: req.params.idSalidaGas }).lean();
        if (!historialGas) {
            res.status(404).send({ message: "Historial de gas no encontrado" });
        } else {
            res.status(200).send(historialGas);
        }
    } catch (error) {
        if (error instanceof Error) {
            next(error);
        }
    }
};

// Función para obtener el historial de climas
const getHistorialClimas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialClimas = await ClimasModel.find({ idZona: req.params.idZona, idClima: req.params.idClima }).lean();
        if (!historialClimas) {
            res.status(404).send({ message: "Historial de climas no encontrado" });
        } else {
            res.status(200).send(historialClimas);
        }
    } catch (error) {
        if (error instanceof Error) {
            next(error);
        }
    }
};

// Función para obtener el historial de acciones automáticas
const getHistorialAccionesAutomaticas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialAccionesAutomaticas = await AlertasProtocolosAccionablesModel.find({ idZona: req.params.idZona }).lean();
        if (!historialAccionesAutomaticas) {
            res.status(404).send({ message: "Historial de acciones automáticas no encontrado" });
        } else {
            res.status(200).send(historialAccionesAutomaticas);
        }
    } catch (error) {
        if (error instanceof Error) {
            next(error);
        }
    }
};

// Función para obtener la cantidad de personas
const getCantidadPersonas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const cantidadPersonas = await PersonasModel.find({ idZona: req.params.idZona, date: new Date() }).lean();
        if (!cantidadPersonas) {
            res.status(404).send({ message: "Cantidad de personas no encontrada" });
        } else {
            res.status(200).send(cantidadPersonas);
        }
    } catch (error) {
        if (error instanceof Error) {
            next(error);
        }
    }
};

// Función para obtener el consumo de agua
const getConsumoAgua_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const consumoAgua = await AguasModel.find({ idZona: req.params.idZona, date: new Date() }).lean();
        if (!consumoAgua) {
            return res.status(404).send({ message: "Consumo de agua no encontrado" });
        }
        const consumosAgua = consumoAgua.map(agua => agua.consumoAgua);
        res.status(200).send(consumosAgua);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el consumo de gas
const getConsumoGas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const consumoGas = await GasModel.find({ idZona: req.params.idZona, date: new Date() }).lean();
        if (!consumoGas) {
            return res.status(404).send({ message: "Consumo de gas no encontrado" });
        }
        const consumosGas = consumoGas.map(gas => gas.consumoGas);
        res.status(200).send(consumosGas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el consumo de luces
const getConsumoLuces_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const consumoLuces = await LucesModel.find({ idZona: req.params.idZona, date: new Date() }).lean();
        if (!consumoLuces) {
            return res.status(404).send({ message: "Consumo de luces no encontrado" });
        }
        const consumosLuz = consumoLuces.map(luz => luz.consumoLuz);
        res.status(200).send(consumosLuz);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el consumo de climas
const getConsumoGasClimas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const consumoClimas = await ClimasModel.find({ idZona: req.params.idZona, date: new Date() }).lean();
        if (!consumoClimas) {
            return res.status(404).send({ message: "Consumo de climas no encontrado" });
        }
        const consumosGas = consumoClimas.map(clima => clima.consumoGas);
        res.status(200).send(consumosGas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el consumo eléctrico de climas
const getConsumoElectricoClimas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const consumoElectricoClimas = await ClimasModel.find({ idZona: req.params.idZona, date: new Date(), consumoElectrico: { $gt: 0 } }).lean();
        if (!consumoElectricoClimas) {
            return res.status(404).send({ message: "Consumo eléctrico de climas no encontrado" });
        }
        const consumosElectricos = consumoElectricoClimas.map(clima => clima.consumoElectrico);
        res.status(200).send(consumosElectricos);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el historial de personas
const getHistorialPersonas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialPersonas = await PersonasModel.find({ idZona: req.params.idZona }).lean();
        if (!historialPersonas || historialPersonas.length === 0) {
            res.status(404).send({ message: "Historial de personas no encontrado" });
        } else {
            res.status(200).send(historialPersonas);
        }
    } catch (error) {
        if (error instanceof Error) {
            next(error);
        }
    }
};

// Función para obtener la predicción de personas
const getPrediccionPersonas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const prediccionPersonas = await PersonasModel.find().lean();
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
        const prediccionAgua = await AguasModel.find().lean();
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
        const prediccionLuces = await LucesModel.find().lean();
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
        const prediccionGas = await GasModel.find().lean();
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
        const prediccionClima = await ClimasModel.find().lean();
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
        const alertasProtocolosActuales = await AlertasProtocolosAccionablesModel.find().lean();
        res.status(200).send(alertasProtocolosActuales);
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
    getConsumoAgua_C,
    getConsumoGas_C,
    getConsumoLuces_C,
    getConsumoGasClimas_C,
    getConsumoElectricoClimas_C
};