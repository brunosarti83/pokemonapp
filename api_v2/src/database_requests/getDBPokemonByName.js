const { Pokemon, Type } = require('../db');

const getDBPokemonByName = async (name) => {
    try {
        const pokemon = await Pokemon.findAll({ 
            where: {
                name: name
            },
            attributes: ['id', 'name', 'image', 'attack'],
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