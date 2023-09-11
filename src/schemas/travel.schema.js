import Joi from "joi"

export const schemaTravel = Joi.object({
    passengerId: Joi.number().integer().required().messages({
        'number.integer': `"PassengerId" must be an integer!`,
        'any.required': `"PassengerId" is a mandatory field.`
    }),
	flightId: Joi.number().integer().required().messages({
        'number.integer': `"FlightId" must be an integer!`,
        'any.required': `"FlightId" is a mandatory field.`
    }),
});