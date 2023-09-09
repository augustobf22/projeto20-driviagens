import { Router } from "express";
import { flightsController } from "../controllers/flights.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { schemaFlight } from "../schemas/flight.schema.js";

const flightsRouter = Router();

flightsRouter.post("/flights", validateSchema(schemaFlight), flightsController.create);

export default flightsRouter; 