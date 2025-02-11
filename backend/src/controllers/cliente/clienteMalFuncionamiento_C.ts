import express from "express";

import ContactarModel from "../../models/cliente/contactar";
import AlertasProtocolosAccionablesModel from "../../models/admin/alertasProtocolosAccionables";


// Función para enviar mal funcionamiento
const enviarMalFuncionamiento_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const malFuncionamiento = new AlertasProtocolosAccionablesModel(req.body);
        await malFuncionamiento.save();
        res.status(200).send("Mal funcionamiento enviado, gracias");
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

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

export { enviarMalFuncionamiento_C, getContactar_C };