import express from "express";

// Función para obtener reportes activos
const getReportesActivos_C = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const reportesActivos = await ReportesActivosModel.find().lean();
        res.status(200).send(reportesActivos);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

// Función para marcar "tarea hecha"
const marcarTareaHecha_C = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const tareaHecha = await TareasModel.findByIdAndUpdate(req.params.id, { estado: "hecha" }, { new: true }).lean();
        res.status(200).send(tareaHecha);
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
    }
};

export {
    getReportesActivos_C,
    marcarTareaHecha_C
};