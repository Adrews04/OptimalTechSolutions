import express from "express";

import CamaraModel from "../../models/admin/camara";
import AlertasFalloModel from "../../models/admin/alertasFallo";

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
        const currentDate = new Date();
        currentDate.setSeconds(0, 0); // Set seconds and milliseconds to zero
        const alerta = await AlertasFalloModel.find({_id : req.params.id, date : currentDate}).lean();
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
        const historial = await AlertasFalloModel.findById(req.params.id).lean();
        res.status(200).send(historial);
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
    getAlertaCamaraHistorialById_C
};