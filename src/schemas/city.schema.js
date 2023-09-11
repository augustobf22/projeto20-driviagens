import Joi from "joi"

export const schemaCity = Joi.object({
    name: Joi.string().min(2).max(50).required().messages({
        'string.base': `"City" is a text field!`,
        'string.min': `"City" must have at least 2 characters.`,
        'string.max': `"City" must have a maximum of 50 characters.`,
        'any.required': `"City" is a mandatory field.`
    })
});