const getDBPokemonByName = require('../database_requests/getDBPokemonByName');

const getPokemonByNameHandler = async (name) => {
    try {
        const DBPokemons = await getDBPokemonByName(name)
        return DBPokemons

    } catch (error) {
        throw error
    }
}

module.exports = getPokemonByNameHandler;