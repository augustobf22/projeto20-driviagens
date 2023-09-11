import { passengersService } from "../services/passengers.service.js";
import httpStatus from "http-status";

async function create(req, res) {
    const { firstName, lastName } = req.body;

    await passengersService.create(firstName, lastName);

    res.sendStatus(httpStatus.CREATED);
};

async function findTravels(req, res) {
    const { name } = req.query;

    const travels = await passengersService.findTravels(name);
    res.send(travels).status(httpStatus.OK);
};

export const passengersController = {create, findTravels}; 