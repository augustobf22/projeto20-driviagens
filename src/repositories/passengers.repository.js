import { db } from "../configs/db.connection.js";

async function create(firstName, lastName) {
    await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName]);
};

async function findTravels(name) {
    if(name !== undefined) {
        let result = await db.query(`SELECT 
                                        p."firstName" || ' ' || p."lastName" AS passenger, COUNT(*) AS travels
                                    FROM travels t
                                    LEFT JOIN passengers p ON p.id = t."passengerId"
                                    WHERE p."firstName" ILIKE '%$1%' OR p."lastName" ILIKE '%$1%'
                                    GROUP BY passenger
                                    ORDER BY travels DESC
                                    LIMIT 10`, [name]);
        return result.rows;
    } else {
        let result = await db.query(`SELECT 
                                        p."firstName" || ' ' || p."lastName" AS passenger, COUNT(*) AS travels
                                    FROM travels t
                                    LEFT JOIN passengers p ON p.id = t."passengerId"
                                    GROUP BY passenger
                                    ORDER BY travels DESC
                                    LIMIT 10`);
        return result.rows;
    }
}

export const passengersRepository = {create, findTravels}; 