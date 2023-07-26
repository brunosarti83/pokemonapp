const { Type, Pokemon } = require('../db');

const getDBAllPokemons = async () => {
    try {
        const dbPokemons = await Pokemon.findAll({
            attributes: ['id', 'name', 'image', 'attack'],
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        return dbPokemons || []
        
    } catch (error) {
        throw error
    }
}

module.exports = getDBAllPokemons;