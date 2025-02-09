import express from "express";

// Función para obtener el historial de reservas
const getHistorialReservas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const historialReservas = await HistorialReservasModel.find().lean();
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
        const satisfaccion = new SatisfaccionModel(req.body);
        await satisfaccion.save();
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