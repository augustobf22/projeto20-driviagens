import { errors } from "../utils/errors.js";

export function validateSchema(schema) {

    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            let errorMessage = "";
            validation.error.details.forEach(detail => errorMessage += detail.message + " ");
            
            throw errors.joi(errorMessage);
        }

        next();
    }
}