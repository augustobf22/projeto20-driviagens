import { passengersService } from "../services/passengers.service.js";

async function create(req, res) {
    const { firstName, lastName } = req.body;

    await passengersService.create(firstName, lastName);

    res.sendStatus(201);
};

async function findTravels(req, res) {
    const { name } = req.query;

    const travels = await passengersService.findTravels(name);
    res.send(travels).status(200);
};

export const passengersController = {create, findTravels}; 