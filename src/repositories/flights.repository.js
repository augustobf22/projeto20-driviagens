import { db } from "../configs/db.connection.js";

async function checkCities(origin, destination) {
    const result = await db.query(`SELECT * FROM cities WHERE id = $1 OR id = $2`, [origin, destination]);
    return result;
}

async function create(origin, destination, date) {
    await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3)`, [origin, destination, date]);
};

async function findFlights(origin, destination, date) {
    const result = await db.query(`SELECT 
                                        f.id AS id, 
                                        c_origin.name AS origin,
                                        c_destination.name AS destination,
                                        f.date AS date
                                    FROM flights f
                                    LEFT JOIN cities c_origin ON c_origin.id = f.origin
                                    LEFT JOIN cities c_destination ON c_destination = f.destination`);

    return result.rows;
};

export const flightsRepository = {create, checkCities, findFlights}; 