import express from "express";

import AlertasFalloModel from "../../models/admin/alertasFallo";
import LucesModel from "../../models/admin/luces";
import AguasModel from "../../models/admin/aguas";
import GasModel from "../../models/admin/gas";
import ClimasModel from "../../models/admin/climas";
import PersonasModel from "../../models/admin/personas";
import AlertasProttocolosAccionablesModel from "../../models/admin/alertasProtocolosAccionables";



// Función para obtener el historial de alertas
const getHistorialAlertas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialAlertas = await AlertasFalloModel.find().lean();
        res.status(200).send(historialAlertas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el historial de acciones automáticas
const getHistorialAccionesAutomaticas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialAccionesAutomaticas = await AlertasProttocolosAccionablesModel.find().lean();
        res.status(200).send(historialAccionesAutomaticas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener los recursos de agua
const getRecursosAgua_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const recursosAgua = await AguasModel.find().lean();
        res.status(200).send(recursosAgua);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener los recursos de luces
const getRecursosLuces_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const recursosLuces = await LucesModel.find().lean();
        res.status(200).send(recursosLuces);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener los recursos de gas
const getRecursosGas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const recursosGas = await GasModel.find().lean();
        res.status(200).send(recursosGas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener los recursos de climas
const getRecursosClimas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const recursosClimas = await ClimasModel.find().lean();
        res.status(200).send(recursosClimas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener los recursos de personas
const getRecursosPersonas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const recursosPersonas = await PersonasModel.find().lean();
        res.status(200).send(recursosPersonas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener las personas actuales
const getActualPersonas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const actualPersonas = await PersonasModel.find().lean();
        res.status(200).send(actualPersonas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

export {
    getHistorialAlertas_C,
    getHistorialAccionesAutomaticas_C,
    getRecursosAgua_C,
    getRecursosLuces_C,
    getRecursosGas_C,
    getRecursosClimas_C,
    getRecursosPersonas_C,
    getActualPersonas_C
};