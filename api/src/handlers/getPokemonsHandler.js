const { Type, Pokemon } = require('../db');

const getPokemonsHandler = async () => {
    try {
        const pokemons = await Pokemon.findAll({
            attributes: ['id', 'originalId', 'name', 'image', 'attack'],
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        return pokemons
    } catch (error) {
        throw error
    }
}

module.exports = getPokemonsHandler;