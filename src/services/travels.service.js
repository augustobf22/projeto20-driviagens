import { travelsRepository } from "../repositories/travels.repository.js";

async function create(passengerId, flightId) {
    //const checkFlight = travelsRepository.checkFlight(flightId);
    //const checkPassenger = travelsRepository.checkPassenger(passengerId);

    //if(checkFlight === undefined || checkPassenger === undefined) return ERRO 404 not found

    await travelsRepository.create(passengerId, flightId);
};

export const travelsService = {create}; 