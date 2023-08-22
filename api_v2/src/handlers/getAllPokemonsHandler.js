const getDBAllPokemons = require('../database_requests/getDBAllPokemons');

const getAllPokemonsHandler = async () => {
    try {
        const allDBPokemons = await getDBAllPokemons()
        return allDBPokemons
        
    } catch (error) {
        throw error
    }
}

module.exports = getAllPokemonsHandler;