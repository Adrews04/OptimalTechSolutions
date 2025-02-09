import express from "express";

// Función para obtener alertas de fallo
const getAlertasFallo_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const alertasFallo = await AlertasFalloModel.find().lean();
        res.status(200).send(alertasFallo);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener alertas pasadas de fallo
const getAlertasPasadasFallo_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const alertasPasadasFallo = await AlertasPasadasFalloModel.find().lean();
        res.status(200).send(alertasPasadasFallo);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para ir a informe de alerta
const irInformeAlerta_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const informeAlerta = await InformeAlertaModel.findById(req.params.id).lean();
        res.status(200).send(informeAlerta);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para ir a cámara de zona de alerta
const irCamaraZonaAlerta_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const camaraZonaAlerta = await CamaraZonaAlertaModel.findById(req.params.id).lean();
        res.status(200).send(camaraZonaAlerta);
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
    getAlertasFallo_C,
    getAlertasPasadasFallo_C,
    irInformeAlerta_C,
    irCamaraZonaAlerta_C,
    getBotonesPaneles_C
};