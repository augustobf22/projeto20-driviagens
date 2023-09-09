import { db } from "../configs/db.connection.js";

async function create(firstName, lastName) {
    await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName]);
};

async function findTravels() {
    let result = await db.query(`SELECT * FROM travels`);
    return result.rows;
}

export const passengersRepository = {create, findTravels};