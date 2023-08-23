// models
const { Pokemon, Type } = require('../db');
// Op
const { Op } = require('sequelize');

const getDBPokemonByName = async (name) => {
    try {
        const pokemon = await Pokemon.findAll({ 
            where: {
                name: { [Op.like]: `%${name}%`}
            },
            attributes: ['id', 'api_id', 'name', 'image', 'attack'],
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