// models
const { Pokemon, Type } = require('../db');
// Op
const { Op } = require('sequelize');

const getDBPokemonByName = async (limit, offset, name) => {
    const where = {
        where: {
            name: { [Op.like]: `%${name}%` }
        }
    }

    try {
        const count = await Pokemon.count(where)
        const results = await Pokemon.findAll({
            limit,
            offset,
            ...where,
            attributes: ['id', 'api_id', 'name', 'image', 'attack'],
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        return { count, limit, offset, results }

    } catch (error) {
        throw error
    }
}

module.exports = getDBPokemonByName;