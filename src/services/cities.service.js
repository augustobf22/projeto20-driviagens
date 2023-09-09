import { citiesRepository } from "../repositories/cities.repository.js"; 

async function create(name) {
    const alreadyExists = citiesRepository.check(name);

    // if(alreadyExists === undefined) ERRO 409 CONFLICT
    
    await citiesRepository.create(name);
};

export const citiesService = {create};