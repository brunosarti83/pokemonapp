const getDBAllPokemons = require('../database_requests/getDBAllPokemons');

const getAllPokemonsHandler = async (query) => {
    try {
        const allDBPokemons = await getDBAllPokemons(query)
        return allDBPokemons

    } catch (error) {
        throw error
    }
}

module.exports = getAllPokemonsHandler;