const getDBAllPokemons = require('../database_requests/getDBAllPokemons');

const getAllPokemonsHandler = async (inputs) => {
    const { limit, offset } = inputs
    try {
        const allDBPokemons = await getDBAllPokemons(limit, offset)
        return allDBPokemons

    } catch (error) {
        throw error
    }
}

module.exports = getAllPokemonsHandler;