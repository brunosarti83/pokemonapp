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
            attributes: ['id', 'name', 'image', 'height', 'weight', 'hp', 'attack', 'defense', 'speed'],
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