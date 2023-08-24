const { Type, Pokemon } = require('../db');

const getDBAllPokemons = async (limit, offset) => {

    try {
        const count = await Pokemon.count()
        const results = await Pokemon.findAll({
            limit, 
            offset,
            attributes: ['id', 'api_id','name', 'image', 'attack'],
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

module.exports = getDBAllPokemons;