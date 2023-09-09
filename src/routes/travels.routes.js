import { Router } from "express";
import { travelsController } from "../controllers/travels.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { schemaTravel } from "../schemas/travel.schema.js";

const travelsRouter = Router();

travelsRouter.post("/travels", validateSchema(schemaTravel), travelsController.create);

export default travelsRouter;