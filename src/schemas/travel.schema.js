import Joi from "joi"

export const schemaTravel = Joi.object({
    passengerId: Joi.number().integer().required(),
	flightId: Joi.number().integer().required(),
});