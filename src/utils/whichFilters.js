export default function whichFilters(origin, destination, smallerDate, biggerDate) {
    let query = `SELECT 
                    f.id AS id, 
                    c_origin.name AS origin,
                    c_destination.name AS destination,
                    TO_CHAR(f.date, 'DD-MM-YYYY') AS date
                FROM flights f
                LEFT JOIN cities c_origin ON c_origin.id = f.origin
                LEFT JOIN cities c_destination ON c_destination.id = f.destination
                `;
    let parameters = [];

    if(origin === undefined && destination === undefined && smallerDate === undefined && biggerDate === undefined) return query+" ORDER BY date DESC";

    if(origin !== undefined) {
        query+=" WHERE c_origin.name = $1";
        parameters.push(origin);

        if(destination !== undefined) {
            query+=" AND c_destination.name = $2";
            parameters.push(destination);

            if(smallerDate !== undefined) {
                if(biggerDate !== undefined) {
                    query+="AND f.date BETWEEN TO_DATE($3, 'DD-MM-YYYY') AND TO_DATE($4, 'DD-MM-YYYY') ORDER BY date DESC";
                    parameters.push(smallerDate, biggerDate);
                } else {
                    //error 422
                }
            } else {
                query+=" ORDER BY date DESC"
            }
        } else if(smallerDate !== undefined) {
            if(biggerDate !== undefined) {
                query+=" AND f.date BETWEEN TO_DATE($2, 'DD-MM-YYYY') AND TO_DATE($3, 'DD-MM-YYYY')  ORDER BY date DESC";
                parameters.push(smallerDate, biggerDate);
            } else {
                //error 422
            }
        } else {
            query+=" ORDER BY date DESC"
        }
        return {query, parameters};
    }

    if(destination !== undefined) {
        query+=" WHERE c_destination.name = $1";
        parameters.push(destination);

        if(smallerDate !== undefined) {
            if(biggerDate !== undefined) {
                query+=" AND f.date BETWEEN TO_DATE($2, 'DD-MM-YYYY') AND TO_DATE($3, 'DD-MM-YYYY')  ORDER BY date DESC";
                parameters.push(smallerDate, biggerDate);
            } else {
                //error 422
            }
        } else {
            query+=" ORDER BY date DESC"
        }

        return {query, parameters};
    } else if(smallerDate !== undefined) {
        if(biggerDate !== undefined) {
            query+=" WHERE f.date BETWEEN TO_DATE($1, 'DD-MM-YYYY') AND TO_DATE($2, 'DD-MM-YYYY')  ORDER BY date DESC";
            parameters.push(smallerDate, biggerDate);
        } else {
            //error 422
        }

        return {query, parameters};
    }
}