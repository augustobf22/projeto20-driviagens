import { travelsRepository } from "../repositories/travels.repository.js";
import { errors } from "../utils/errors.js";

async function create(passengerId, flightId) {
    const checkFlight = await travelsRepository.checkFlight(flightId);
    const checkPassenger = await travelsRepository.checkPassenger(passengerId);
    
    if(checkFlight === undefined){
        if(checkPassenger === undefined) {
            throw errors.notFound("Flight and passenger");
        } else {
            throw errors.notFound("Flight");
        }
    } else if(checkPassenger === undefined) {
        throw errors.notFound("Passenger");
    }
     
    await travelsRepository.create(passengerId, flightId);
};

export const travelsService = {create}; 