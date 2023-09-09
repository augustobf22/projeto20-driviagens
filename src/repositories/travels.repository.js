import { db } from "../configs/db.connection.js";

async function checkFlight(flightId) {
    const result = await db.query(`SELECT * FROM flights WHERE id = $1`, [flightId]);
    return result.rows[0];
}

async function checkPassenger(passengerId) {
    const result = await db.query(`SELECT * FROM passenger WHERE id = $1`, [passengerId]);
    return result.rows[0];
}

async function create(passengerId, flightId) {
    await db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2)`, [passengerId, flightId]);
};

export const travelsRepository = {create, checkFlight, checkPassenger};