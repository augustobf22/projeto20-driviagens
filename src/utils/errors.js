function joi(message) {
    return {
        type: "joiError",
        message
    }
}

function notFound(resource = "Item") {
    return {
        type: "notFound",
        message: `${resource} was not found!`
    }
}

function conflict(item1, item2) {
    return {
        type: "conflict",
        message: `There's a conflict happening between ${item1} and ${item2}.`
    }
}

function unprocessable(resource = "Item") {
    return {
        type: "unprocessable",
        message: `${resource} couldn't be processed.`
    }
}

function badRequest(resource = "Item") {
    return {
        type: "badRequest",
        message: `There was an error in the ${resource} request.`
    }
}

export const errors = { joi, notFound, conflict, unprocessable, badRequest }