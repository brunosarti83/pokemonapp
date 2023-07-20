const { Type, Pokemon } = require('../db');

const getPokemons = async () => {
    try {
        const pokemons = await Pokemon.findAll({
            attributes: ['id', 'originalId', 'name', 'image', 'attack'],
            include: {
                model: Type,
                attributes: {
                    include: ['name']
                },
            }
        })
        return pokemons
    } catch (error) {
        throw error
    }
}

module.exports = getPokemons;