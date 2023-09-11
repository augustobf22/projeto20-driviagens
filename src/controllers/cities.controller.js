import { citiesService } from "../services/cities.service.js";
import httpStatus from "http-status";

async function create(req, res) {
    const { name } = req.body;

    await citiesService.create(name);

    res.sendStatus(httpStatus.CREATED);
};

export const citiesController = {create};