import { citiesService } from "../services/cities.service.js";

async function create(req, res) {
    const { name } = req.body;

    await citiesService.create(name);

    res.sendStatus(201);
};

export const citiesController = {create};