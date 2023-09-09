import { flightsService } from "../services/flights.service.js";

async function create(req, res) {
    const { origin, destination, date } = req.body;

    await flightsService.create(origin, destination, date);

    res.sendStatus(201);
};

async function findFlights(req, res) {
    const {origin, destination, date} = req.query;
    //se esta vazio, como fica? undefined ou null?
    await flightsService.findFlights(origin, destination, date);

    res.sendStatus(200);
}

export const flightsController = {create}; 