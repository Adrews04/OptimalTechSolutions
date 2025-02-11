import express from "express";
import { postAlerta_C } from "../../controllers/admin/admCamara_C";

const alertasRouter = express.Router();

alertasRouter.post("/alertas/:zonaid/:usuarioid", postAlerta_C);

export default alertasRouter;