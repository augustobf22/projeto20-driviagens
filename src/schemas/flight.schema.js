import joiBase from "joi";
import joiDate from "@joi/date";

const Joi = joiBase.extend(joiDate);

export const schemaFlight = Joi.object({
    origin: Joi.number().integer().required().messages({
        'number.integer': `"Origin" must be an integer!`,
        'any.required': `"Origin" is a mandatory field.`
    }),
	destination: Joi.number().integer().required().messages({
        'number.integer': `"Destination" must be an integer!`,
        'any.required': `"Destination" is a mandatory field.`
    }),
	date: Joi.date().format("DD-MM-YYYY").required().messages({
        'date.format': "The date should be in the DD-MM-YYY format",
        'any.required': '"Date" is a mandatory field.'
    })
});