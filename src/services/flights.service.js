import { flightsRepository } from "../repositories/flights.repository.js";
import { errors } from "../utils/errors.js";
import parseDate from "../utils/parseDate.js";

async function create(origin, destination, date) {
    if (origin === destination) throw errors.conflict("origin", "destination");

    const checkCities  = await flightsRepository.checkCities(origin, destination);
    if (checkCities.rowCount < 2) throw errors.notFound("City");

    if (parseDate(date) < Date.now()) {
        throw errors.unprocessable("Date");}

    await flightsRepository.create(origin, destination, date);
};

async function findFlights(origin, destination, smallerDate, biggerDate) {
    if((smallerDate && !biggerDate) || (!smallerDate && biggerDate)) throw errors.unprocessable("Date");

    if(smallerDate && biggerDate) {
        if(parseDate(smallerDate) > parseDate(biggerDate)) throw errors.badRequest("date");        
    }

    const result = await flightsRepository.findFlights(origin, destination, smallerDate, biggerDate);
    return result;
}

export const flightsService = {create, findFlights}; 