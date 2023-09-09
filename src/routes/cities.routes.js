import { Router } from "express";
import { citiesController } from "../controllers/cities.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { schemaCity } from "../schemas/city.schema.js"; 

const citiesRouter = Router();

citiesRouter.post("/cities", validateSchema(schemaCity), citiesController.create);

export default citiesRouter;