const getDBPokemon = require('../database_requests/getDBPokemon');

const getPokemonDetailHandler = async (idPokemon) => {
    try {
        const pokemon = await getDBPokemon(idPokemon)
        return pokemon
        
    } catch (error) {
        throw error
    }
} 

module.exports = getPokemonDetailHandler;