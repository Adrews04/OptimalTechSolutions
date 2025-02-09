import express from "express";

import AlertasFalloModel from "../../models/admin/alertasFallo";
import CamaraModel from "../../models/admin/camara";

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
        const alertasPasadasFallo = await AlertasFalloModel.find().lean();
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
        const informeAlerta = await AlertasFalloModel.findById(req.params.id).lean();
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
        const camaraZonaAlerta = await CamaraModel.findById(req.params.id).lean();
        res.status(200).send(camaraZonaAlerta);
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
    irCamaraZonaAlerta_C
};