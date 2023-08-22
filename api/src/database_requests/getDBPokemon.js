const { Pokemon, Type } = require('../db');

const getDBPokemon = async (idPokemon) => {
    try {
        const pokemon = await Pokemon.findByPk(idPokemon,{
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

module.exports = getDBPokemon;