import express from "express";

// Función para enviar mal funcionamiento
const enviarMalFuncionamiento_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const malFuncionamiento = new MalFuncionamientoModel(req.body);
        await malFuncionamiento.save();
        res.status(200).send(malFuncionamiento);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

export { enviarMalFuncionamiento_C };