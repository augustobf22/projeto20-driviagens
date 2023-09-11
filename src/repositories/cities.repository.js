import { db } from "../configs/db.connection.js";

async function create(name) {
    await db.query(`INSERT INTO cities (name) VALUES ($1)`, [name]);
};

export const citiesRepository = {create}; 