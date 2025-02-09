import express from "express";

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

// Función para obtener el historial de alertas
const getHistorialAlertas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialAlertas = await HistorialAlertasModel.find().lean();
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
        const historialAccionesAutomaticas = await HistorialAccionesAutomaticasModel.find().lean();
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
        const recursosAgua = await RecursosAguaModel.find().lean();
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
        const recursosLuces = await RecursosLucesModel.find().lean();
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
        const recursosGas = await RecursosGasModel.find().lean();
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
        const recursosClimas = await RecursosClimasModel.find().lean();
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
        const recursosPersonas = await RecursosPersonasModel.find().lean();
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
        const actualPersonas = await ActualPersonasModel.find().lean();
        res.status(200).send(actualPersonas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

export {
    getBotonesPaneles_C,
    getHistorialAlertas_C,
    getHistorialAccionesAutomaticas_C,
    getRecursosAgua_C,
    getRecursosLuces_C,
    getRecursosGas_C,
    getRecursosClimas_C,
    getRecursosPersonas_C,
    getActualPersonas_C
};