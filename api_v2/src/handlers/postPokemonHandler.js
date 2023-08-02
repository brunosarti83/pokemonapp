const { Pokemon } = require('../db');

const postPokemonHandler = async (pokemon, typeIds) => {
    try {
        pokemon.name = pokemon.name.toLowerCase()
        const newPokemon = await Pokemon.create(pokemon)
        await newPokemon.addTypes(typeIds)
        
    
    } catch (error) {
        throw error
    }
}

module.exports = postPokemonHandler;