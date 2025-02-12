import express from "express";

import AlertasProtocolosAccionablesModel from "../../models/admin/alertasProtocolosAccionables";

// Función para marcar "tarea hecha"
const marcarTareaHecha_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const tareaHecha = await AlertasProtocolosAccionablesModel.findByIdAndUpdate(req.params.id, { estado: true }, { new: true }).lean();
        res.status(200).send(tareaHecha);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

export {
    marcarTareaHecha_C
};