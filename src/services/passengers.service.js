import { passengersRepository} from "../repositories/passengers.repository.js";

async function create(firstName, lastName) {
    await passengersRepository.create(firstName, lastName);
};

async function findTravels() {
    const travels = await passengersRepository.findTravels();
};

export const passengersService = {create, findTravels};