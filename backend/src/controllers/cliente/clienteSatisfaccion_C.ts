import express from "express";

import ReservaModel from "../../models/reserva";

// Función para obtener el historial de reservas
const getHistorialReservas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialReservas = await ReservaModel.find({ satisfaccion: { $gt: 0 } }).lean();
        res.status(200).send(historialReservas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para enviar satisfacción y notas
const enviarSatisfaccion_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const satisfaccion = await ReservaModel.findByIdAndUpdate(req.params.id, { satisfaccion: req.body.satisfaccion, comentarios: req.body.comentarios }, { new: true }).lean();
        res.status(200).send(satisfaccion);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

export {
    getHistorialReservas_C,
    enviarSatisfaccion_C
};