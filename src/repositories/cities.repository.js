import { db } from "../configs/db.connection.js";

async function create(name) {
    await db.query(`INSERT INTO cities (name) VALUES ($1)`, [name]);
};

async function check(name) { 
    const result = await db.query(`SELECT * FROM cities WHERE name = $1`, [name]);
    return result.rows[0];
}

export const citiesRepository = {create, check};