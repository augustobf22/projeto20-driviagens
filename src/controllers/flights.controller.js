import { flightsService } from "../services/flights.service.js";
import httpStatus from "http-status";

async function create(req, res) {
    const { origin, destination, date } = req.body;

    await flightsService.create(origin, destination, date);

    res.sendStatus(httpStatus.CREATED);
};

async function findFlights(req, res) {
    const {origin, destination, "smaller-date": smallerDate, "bigger-date": biggerDate} = req.query;

    const result = await flightsService.findFlights(origin, destination, smallerDate, biggerDate);

    res.status(httpStatus.OK).send(result);
}

export const flightsController = {create, findFlights};