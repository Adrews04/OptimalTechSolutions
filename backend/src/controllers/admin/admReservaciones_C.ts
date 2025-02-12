import express from "express";

import ReservaModel from "../../models/reserva";
import CamaraModel from "../../models/dispositivos/camara";

// Función para obtener las reservaciones próximas
const getReservacionesProximas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const reservacionesProximas = await ReservaModel.find({ satisfaccion: 0 }).lean();
        res.status(200).send(reservacionesProximas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener las reservaciones pasadas
const getReservacionesPasadas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const reservacionesPasadas = await ReservaModel.find({ satisfaccion: { $gt: 0 } }).lean();
        res.status(200).send(reservacionesPasadas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};


export {
    getReservacionesProximas_C,
    getReservacionesPasadas_C
};