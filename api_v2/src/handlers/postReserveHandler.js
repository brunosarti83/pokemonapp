const { Pokemon, Reserve } = require('../db');

const postReserveHandler = async (body) => {
    try {
        const { pokemonId, ...reserve } = body
        const pokemon = await Pokemon.findByPk(pokemonId)
        const newReserve = await pokemon.createReserve(reserve)
        return newReserve.id
    
    } catch (error) {
        throw error
    }
}

module.exports = postReserveHandler;