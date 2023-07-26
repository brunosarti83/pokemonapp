const { Pokemon, Type } = require('../db');

const getDBPokemonByName = async (name) => {
    try {
        const pokemon = await Pokemon.findAll({ 
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

module.exports = getDBPokemonByName;