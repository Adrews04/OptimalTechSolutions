import express from "express";

import SalidasAguaModel from "../../models/dispositivos/salidasAgua";
import TemperaturaModel from "../../models/admin/temperatura";
import SalidasGasModel from "../../models/dispositivos/salidasGas";
import CamaraModel from "../../models/dispositivos/camara";
import LuzModel from "../../models/admin/Luz";
import AguasModel from "../../models/admin/aguas";
import GasModel from "../../models/admin/gas";
import PersonasModel from "../../models/admin/personas";
import AlertasProtocolosAccionablesModel from "../../models/admin/alertasProtocolosAccionables";
import LucesModel from "../../models/dispositivos/luces";
import SalidaAguaModel from "../../models/dispositivos/salidasAgua";

// Función para obtener la cámara por ID
const getCamaraById_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const camara = await CamaraModel.find({ idZona: req.params.idZona }).lean();
        res.status(200).send(camara);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener las Luz disponibles
const getLuzDisponibles_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const Luz = await LuzModel.find({ idZona: req.params.idZona }).lean();
        res.status(200).send(Luz);
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

// Función para obtener los Temperatura disponibles
const getTemperaturaDisponibles_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const Temperatura = await TemperaturaModel.find({ idZona: req.params.idZona }).lean();
        res.status(200).send(Temperatura);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

const toggleLuz_C = async (req: express.Request, res: express.Response) => {
    try {
        const gastoActual = await LuzModel.findOne({ idZona: req.params.idZona, idTuboLed: req.params.idTuboLed }).lean();

        if (!gastoActual) {
            res.status(404).json({ message: "Luz no encontrada" });
        }
        else {
            const estado = gastoActual.consumoLuz > 0;

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

        const salidaAgua = await SalidasAguaModel.findOne({ idZona: req.params.idzona, idSalida: req.params.idSalida }).lean();

        if (!salidaAgua || !salidaAgua.status) {
            res.status(404).send({ message: "Salida de Agua no encontrada" });
        }

        const salidaDeAgua = await SalidasAguaModel.findOneAndUpdate(
            { idZona: req.params.idzona, idSalida: req.params.idSalida },
            { $set: { status: (salidaAgua?.status == true) ? false : true } },
            { new: true }
        ).lean();

        res.status(200).send("Salida de agua accionada correctamente");
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};


// Función para activar/desactivar gas
const toggleGas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const salidaGas = await SalidasGasModel.findOne({ idZona: req.params.idZona, idSalida: req.params.idSalida }).lean();

        if (!salidaGas || !salidaGas.status) {
            res.status(404).send({ message: "Salida de Gas no encontrada" });
        } else {
            const salidaDeGas = await SalidasGasModel.findOneAndUpdate(
                { idZona: req.params.idZona, idSalida: req.params.idSalida },
                { $set: { status: (salidaGas.status == true) ? false : true } },
                { new: true }
            ).lean();

            res.status(200).send("Salida de gas accionada correctamente");
        }
    } catch (error) {
        if (error instanceof Error) {
            next(error);
        }
    }
};


// Función para obtener el historial de Luz
const getHistorialLuz_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialLuz = await LuzModel.find({ idZona: req.params.idZona, idTuboLed: req.params.idTuboLed }).lean();
        if (!historialLuz) {
            res.status(404).send({ message: "Historial de Luz no encontrado" });
        } else {
            res.status(200).send(historialLuz);
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

// Función para obtener el historial de Temperatura
const getHistorialTemperatura_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialTemperatura = await TemperaturaModel.find({ idZona: req.params.idZona }).lean();
        if (!historialTemperatura) {
            res.status(404).send({ message: "Historial de Temperatura no encontrado" });
        } else {
            res.status(200).send(historialTemperatura);
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
        const historialAccionesAutomaticas = await AlertasProtocolosAccionablesModel.find({ idZona: req.params.idZona, idUsuario: 0 }).lean();
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
        const cantidadPersonas = await PersonasModel.findOne({ idZona: req.params.idZona }).sort({ _id: -1 });

        if (!cantidadPersonas) {
            res.status(404).send({ message: "Cantidad de personas no encontrada" });
        } else {
            res.status(200).send("Cantidad de personas: " + cantidadPersonas.cantidadPersonas);
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
        const consumoAgua = await AguasModel.findOne({ idZona: req.params.idZona, idSalidaAgua: req.params.idSalidaAgua }).sort({ _id: -1 });
        if (!consumoAgua) {
            res.status(404).send({ message: "Consumo de agua no encontrado" });
        }

        if (consumoAgua) {
            res.status(200).send("Consumo de agua: " + consumoAgua.consumoAgua);
        } else {
            res.status(404).send({ message: "Consumo de agua no encontrado" });
        }
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el consumo de gas
const getConsumoGas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const consumoGas = await GasModel.findOne({ idZona: req.params.idZona, idSalidaGas: req.params.idSalidaGas }).sort({ _id: -1 });

        if (!consumoGas) {
            res.status(404).send({ message: "Consumo de gas no encontrado" });
        }
        if (consumoGas) {
            res.status(200).send("Consumo de gas: " + consumoGas.consumoGas);
        } else {
            res.status(404).send({ message: "Consumo de gas no encontrado" });
        }
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el consumo de Luz
const getConsumoLuz_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const consumoLuz = await LuzModel.findOne({ idZona: req.params.idZona, idTuboLed: req.params.idTuboLed }).sort({ _id: -1 });
        if (!consumoLuz) {
            res.status(404).send({ message: "Consumo de Luz no encontrado" });
        }

        if (consumoLuz) {
            res.status(200).send("Consumo de Luz: " + consumoLuz.consumoLuz);
        }
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el consumo de Temperatura
const getTemperatura_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const Temperatura = await TemperaturaModel.findOne({ idZona: req.params.idZona }).sort({ _id: -1 });
        if (!Temperatura) {
            res.status(404).send({ message: "Temperatura no encontrada" });
        }

        res.status(200).send("Temperatura en zona " + req.params.idZona + ": " + (Temperatura ? Temperatura.temperatura : "No disponible"));
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

/* // Función para obtener la predicción de personas
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

// Función para obtener la predicción de Luz
const getPrediccionLuz_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const prediccionLuz = await LuzModel.find().lean();
        res.status(200).send(prediccionLuz);
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

// Función para obtener la predicción de Temperatura
const getPrediccionTemperatura_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const prediccionTemperatura = await TemperaturaModel.find().lean();
        res.status(200).send(prediccionTemperatura);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
}; */

const postAlerta_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const message = req.body.message;
        const idUsuario = req.body.idUsuario;
        const idZona = req.params.idZona;
        const nuevaAlerta = new AlertasProtocolosAccionablesModel({
            message: message,
            idZona: idZona,
            idUsuario: idUsuario
        });
        await nuevaAlerta.save();
        res.status(200).send(nuevaAlerta);
    } catch (error) {
        if (error instanceof Error) {
            next(error);  // Usar next para pasar el error al middleware de manejo de errores
        }
    }
};

const postLuz_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const nuevaLuz = new LucesModel({
            idZona: req.params.idZona,
            idTuboLed: req.body.idTuboLed,
            status: true
        });
        await nuevaLuz.save();
        res.status(200).send(nuevaLuz);
    } catch (error) {
        if (error instanceof Error) {
            next(error);  // Usar next para pasar el error al middleware de manejo de errores
        }
    }
};

const postGas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const nuevoGas = new SalidasGasModel({
            idZona: req.params.idZona,
            idSalida: req.body.idSalida,
            status: true
        });
        await nuevoGas.save();
        res.status(200).send(nuevoGas);
    } catch (error) {
        if (error instanceof Error) {
            next(error);  // Usar next para pasar el error al middleware de manejo de errores
        }
    }
};

const postAguas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const nuevaAgua = new SalidaAguaModel({
            idZona: req.params.idZona,
            idSalida: req.body.idSalida,
            status: true
        });
        await nuevaAgua.save();
        res.status(200).send(nuevaAgua);
    } catch (error) {
        if (error instanceof Error) {
            next(error);  // Usar next para pasar el error al middleware de manejo de errores
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
        const alertasProtocolosActuales = await AlertasProtocolosAccionablesModel.find().sort({ _id: -1 }).lean();
        res.status(200).send(alertasProtocolosActuales);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

export {
    getCamaraById_C,
    getLuzDisponibles_C,
    getAguasDisponibles_C,
    getGasDisponible_C,
    getTemperaturaDisponibles_C,
    toggleLuz_C,
    toggleAguas_C,
    toggleGas_C,
    getHistorialLuz_C,
    getHistorialAguas_C,
    getHistorialGas_C,
    getHistorialTemperatura_C,
    getHistorialAccionesAutomaticas_C,
    getCantidadPersonas_C,
    getHistorialPersonas_C,
    /* getPrediccionPersonas_C,
    getPrediccionAgua_C,
    getPrediccionLuz_C,
    getPrediccionGas_C,
    getPrediccionTemperatura_C, */
    postAlerta_C,
    postLuz_C,
    postAguas_C,
    postGas_C,
    getAlertasProtocolosAccionables_C,
    getAlertasProtocolosActuales_C,
    getConsumoAgua_C,
    getConsumoGas_C,
    getConsumoLuz_C,
    getTemperatura_C
};