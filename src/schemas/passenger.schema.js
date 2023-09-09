import Joi from "joi"

export const schemaPassenger = Joi.object({
    firstName: Joi.string().min(2).max(100).required().messages({
        'string.base': `"First name" is a text field!`,
        'string.min': `"First name" must have at least 2 characters.`,
        'string.max': `"First name" must have a maximum of 100 characters.`,
        'any.required': `"First name" is a mandatory field.`
    }),
    lastName: Joi.string().min(2).max(100).required().messages({
        'string.base': `"Last name" is a text field!`,
        'string.min': `"Last name" must have at least 2 characters.`,
        'string.max': `"Last name" must have a maximum of 100 characters.`,
        'any.required': `"Last name" is a mandatory field.`
    })
});