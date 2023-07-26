const getDBAllPokemons = require('../database_requests/getDBAllPokemons');
const getApiAllPokemons = require('../api_requests/getApiAllPokemons');

const getAllPokemonsHandler = async () => {
    try {
        const allApiPokemons = await getApiAllPokemons()
        const allDBPokemons = await getDBAllPokemons()
        const unifiedPokemons = [...allApiPokemons, ...allDBPokemons]
        return unifiedPokemons
        
    } catch (error) {
        throw error
    }
}

module.exports = getAllPokemonsHandler;