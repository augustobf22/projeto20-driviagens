import { flightsRepository } from "../repositories/flights.repository";

async function create(origin, destination, date) {
    const checkCities  = flightsRepository.checkCities(origin, destination);
    //if (checkCities.rowCount < 2) return ERRO 404

    //if (origin === destination) return ERRO 409 conflict

    //if (Date(date) < Date(Now())) return ERRO 422 unprocessable

    await flightsRepository.create(origin, destination, date);
};

async function findFlights(origin, destination, date) {
    
}

export const flightsService = {create, findFlights}; 