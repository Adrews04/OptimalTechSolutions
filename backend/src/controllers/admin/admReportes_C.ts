import express from "express";

// Función para obtener el historial de reportes
const getHistorialReportes_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialReportes = await HistorialReportesModel.find().lean();
        res.status(200).send(historialReportes);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el análisis
const getAnalisis_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const analisis = await AnalisisModel.find().lean();
        res.status(200).send(analisis);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener las predicciones
const getPredicciones_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const predicciones = await PrediccionesModel.find().lean();
        res.status(200).send(predicciones);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

export {
    getHistorialReportes_C,
    getAnalisis_C,
    getPredicciones_C
};