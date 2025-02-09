import express from "express";

// Función para obtener disponibilidades
const getDisponibilidades_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const disponibilidades = await DisponibilidadesModel.find().lean();
        res.status(200).send(disponibilidades);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener precios
const getPrecios_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const precios = await PreciosModel.find().lean();
        res.status(200).send(precios);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para contactar
const getContactar_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const contactar = await ContactarModel.find().lean();
        res.status(200).send(contactar);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para reservar
const getReservar_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const nuevaReserva = new ReservasModel(req.body);
        await nuevaReserva.save();
        res.status(200).send(nuevaReserva);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

export {
    getDisponibilidades_C,
    getPrecios_C,
    getContactar_C,
    getReservar_C
};