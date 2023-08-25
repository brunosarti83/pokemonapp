const { Op } = require('sequelize')
const { Type, Pokemon } = require('../db');

const getDBAllPokemons = async (limit, offset, filterObj) => {

    const { type, origin, orderBy, direction } = filterObj
    const where = {}
    const includeWhere = {}
    if (type) { includeWhere.name = type }
    switch (origin) {
        case 'original':
            where.api_id = { [Op.not]: null }
            break
        case 'custom':
            where.api_id = { [Op.is]: null }
            break
        default:
            break
    }
    

    try {
        const results = await Pokemon.findAndCountAll({
            limit, 
            offset,
            where,
            attributes: ['id', 'api_id','name', 'image', 'attack'],
            include: {
                model: Type,
                where: includeWhere,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            },
            distinct: true
        })
         
        return { limit, offset, ...results }
        
    } catch (error) {
        throw error
    }
}

module.exports = getDBAllPokemons;