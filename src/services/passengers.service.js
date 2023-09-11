import { passengersRepository} from "../repositories/passengers.repository.js";

async function create(firstName, lastName) {
    await passengersRepository.create(firstName, lastName);
};

async function findTravels(name) {
    const travels = await passengersRepository.findTravels(name);
};

export const passengersService = {create, findTravels}; 