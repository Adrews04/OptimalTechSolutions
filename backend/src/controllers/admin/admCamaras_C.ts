import express from "express";

import CamaraModel from "../../models/dispositivos/camara";
import AlertasProtocolosAccionablesModel from "../../models/admin/alertasProtocolosAccionables";

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
        const camara = await CamaraModel.findById(req.params.idZona).lean();
        res.status(200).send(camara);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener el historial de alertas de cámara por ID
const getAlertaCamaraHistorialById_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historial = await AlertasProtocolosAccionablesModel.find({idZona: req.params.idZona}).lean();
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
    getAlertaCamaraHistorialById_C
};