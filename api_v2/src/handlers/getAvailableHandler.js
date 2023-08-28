const getDBAvailablePokemons = require('../database_requests/getDBAvailablePokemons');

const getAvailableHandler = async (query) => {
    try {
        const availablePokemons = await getDBAvailablePokemons(query)
        return availablePokemons

    } catch (error) {
        throw error
    }
}

module.exports = getAvailableHandler;