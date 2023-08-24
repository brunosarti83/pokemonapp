const getDBPokemonByName = require('../database_requests/getDBPokemonByName');

const getPokemonByNameHandler = async (inputs) => {
    const { limit, offset, lowerCaseName } = inputs
    try {
        const DBPokemons = await getDBPokemonByName(limit, offset, lowerCaseName)
        return DBPokemons

    } catch (error) {
        throw error
    }
}

module.exports = getPokemonByNameHandler;