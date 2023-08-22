const getApiPokemonByName = require('../api_requests/getApiPokemonByName');
const getDBPokemonByName = require('../database_requests/getDBPokemonByName')

const getPokemonByNameHandler = async (name) => {
    try {
        const apiPokemons = await getApiPokemonByName(name)
        const DBPokemons = await getDBPokemonByName(name)
        return [...apiPokemons, ...DBPokemons]

    } catch (error) {
        throw error
    }
}

module.exports = getPokemonByNameHandler;