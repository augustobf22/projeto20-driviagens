import Joi from "joi";

const Joi = require('joi')
    .extend(require('@joi/date'));

export const schemaFlight = Joi.object({
    origin: Joi.number().integer().required(),
	destination: Joi.number().integer().required(),
	date: Joi.date().format('DD-MM-YYYY').utc().required()
});