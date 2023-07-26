const { Type, Pokemon } = require('../db');

const getDBAllPokemons = async () => {
    try {
        const dbPokemons = await Pokemon.findAll({
            attributes: ['id', 'name', 'image', 'hp', 'attack', 'defense', 'speed'],
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