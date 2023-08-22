const getDBPokemon = require('../database_requests/getDBPokemon');
const getApiPokemon = require('../api_requests/getApiPokemon');
const formatForDetails = require('../api_requests/formatForDetails')

const getPokemonDetailHandler = async (idPokemon) => {
    try {
        let pokemon;
        if (Boolean(Number(idPokemon))) {
            pokemon = await getApiPokemon(idPokemon, formatForDetails)
        } else {
            pokemon = await getDBPokemon(idPokemon)
        }
        return pokemon
        
    } catch (error) {
        throw error
    }
} 

module.exports = getPokemonDetailHandler;