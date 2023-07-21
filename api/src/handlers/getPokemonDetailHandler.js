const { Pokemon } = require('../db');

const getPokemonDetailHandler = async (idPokemon) => {
    try {
        const pokemon = await Pokemon.findByPk(idPokemon)
        return pokemon
    } catch (error) {
        throw error
    }
} 

module.exports = getPokemonDetailHandler;