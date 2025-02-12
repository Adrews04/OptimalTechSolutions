import express from "express";

import ContactarModel from "../../models/cliente/contactar";
import ReservaModel from "../../models/reserva"; 

// Función para obtener disponibilidades
const getNoDisponibilidades_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const noDisponibles = await ReservaModel.find().lean();
        res.status(200).send(noDisponibles);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para reservar
const postReservar_C = async (req: express.Request, res: express.Response) => {
    try {
        const nuevaReserva = new ReservaModel(req.body);

        await nuevaReserva.save();
        res.status(200).send(nuevaReserva);
    } catch (error) {
        console.error('Error en postReservar_C:', error);
        res.status(500).send({ error: 'Error al guardar la reserva' });
    }
};


export {
    getNoDisponibilidades_C,
    postReservar_C
};