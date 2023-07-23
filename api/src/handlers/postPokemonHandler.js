const { Pokemon, Type } = require('../db');

const postPokemonHandler = async (pokemon, typeIds) => {
    try {
        const newPokemon = await Pokemon.create(pokemon)
        await newPokemon.addTypes(typeIds)
    } catch (error) {
        throw error
    }
}

module.exports = postPokemonHandler;