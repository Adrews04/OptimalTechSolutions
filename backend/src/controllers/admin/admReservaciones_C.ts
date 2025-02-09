import express from "express";

import ReservaModel from "../../models/reserva";
import CamaraModel from "../../models/admin/camara";

// Función para obtener las reservaciones próximas
const getReservacionesProximas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const reservacionesProximas = await ReservaModel.find({ fecha: { $gte: new Date() } }).lean();
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
        const reservacionesPasadas = await ReservaModel.find({ fecha: { $lt: new Date() } }).lean();
        res.status(200).send(reservacionesPasadas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para obtener las reservaciones activas
const getReservacionesActivas_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const reservacionesActivas = await ReservaModel.find({ activa: true }).lean();
        res.status(200).send(reservacionesActivas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para ir a cámara de reservaciones activas
const irCamaraReservacionesActivas_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const camaraReservacionesActivas = await CamaraModel.findById(req.params.id).lean();
        res.status(200).send(camaraReservacionesActivas);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};


export {
    getReservacionesProximas_C,
    getReservacionesPasadas_C,
    getReservacionesActivas_C,
    irCamaraReservacionesActivas_C
};