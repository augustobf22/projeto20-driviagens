import { flightsRepository } from "../repositories/flights.repository.js";

async function create(origin, destination, date) {
    const checkCities  = await flightsRepository.checkCities(origin, destination);

    //if (checkCities.rowCount < 2) return ERRO 404

    //if (origin === destination) return ERRO 409 conflict

    //if (Date(date) < Date(Now())) return ERRO 422 unprocessable

    await flightsRepository.create(origin, destination, date);
};

async function findFlights(origin, destination, smallerDate, biggerDate) {
    const result = await flightsRepository.findFlights(origin, destination, smallerDate, biggerDate);
    return result;
}

export const flightsService = {create, findFlights}; 