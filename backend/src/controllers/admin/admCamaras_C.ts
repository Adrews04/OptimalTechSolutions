import express from "express";

// Función para obtener todas las cámaras
const getAllCamaras_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const camaras = await CamaraModel.find().lean();
        res.status(200).send(camaras);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

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

// Función para obtener la alerta de cámara por ID
const getAlertaCamaraById_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const alerta = await AlertaCamaraModel.findById(req.params.id).lean();
        res.status(200).send(alerta);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el historial de alertas de cámara por ID
const getAlertaCamaraHistorialById_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historial = await AlertaCamaraHistorialModel.find({ camaraId: req.params.id }).lean();
        res.status(200).send(historial);
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
    getAllCamaras_C,
    getCamaraById_C,
    getAlertaCamaraById_C,
    getAlertaCamaraHistorialById_C,
    getBotonesPaneles_C
};