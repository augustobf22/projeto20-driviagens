import { Router } from "express";
import { passengersController } from "../controllers/passengers.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { schemaPassenger } from "../schemas/passenger.schema.js";

const passengersRouter = Router();

passengersRouter.post("/passengers", validateSchema(schemaPassenger), passengersController.create);
passengersRouter.get("/passengers/travels", passengersController.findTravels);

export default passengersRouter;