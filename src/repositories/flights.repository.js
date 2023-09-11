import { db } from "../configs/db.connection.js";
import whichFilters from "../utils/whichFilters.js"

async function checkCities(origin, destination) {
    const result = await db.query(`SELECT * FROM cities WHERE id = $1 OR id = $2`, [origin, destination]);
    return result;
};

async function create(origin, destination, date) {
    await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, TO_DATE($3, 'DD-MM-YYYY'))`, [origin, destination, date]);
};

async function findFlights(origin, destination, smallerDate, biggerDate) {
    const filters = whichFilters(origin, destination, smallerDate, biggerDate);

    if(!filters.parameters){
        const result = await db.query(filters);
        return result.rows;
    } else {
        const result = await db.query(filters.query, filters.parameters);
        return result.rows;
    }
};

export const flightsRepository = {create, checkCities, findFlights}; 