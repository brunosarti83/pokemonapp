const { Pokemon, Type } = require('../db');

const getPokemonByNameHandler = async (name) => {
    try {
        const pokemon = await Pokemon.findOne({ 
            where: {
                name: name
            },
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        return pokemon
    } catch (error) {
        throw error
    }
}

module.exports = getPokemonByNameHandler;