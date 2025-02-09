import express from "express";

import ContactarModel from "../../models/cliente/contactar";
import ReservaModel from "../../models/reserva"; 

// Función para obtener disponibilidades
const getDisponibilidades_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const disponibilidades = await ReservaModel.find().lean();
        res.status(200).send(disponibilidades);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para contactar
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

// Función para reservar
const postReservar_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const nuevaReserva = new ReservaModel(req.body);
        await nuevaReserva.save();
        res.status(200).send(nuevaReserva);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

export {
    getDisponibilidades_C,
    getContactar_C,
    postReservar_C
};