const { Op } = require('sequelize')
const { Type, Pokemon, Reserve } = require('../db');

const getDBAvailablePokemons = async (query) => {

    const { startDate, endDate } = query

    try {
        const busy = await Reserve.findAll({
            where: {
                startDate: {
                    [Op.lte]: new Date(endDate)
                },
                endDate: {
                    [Op.gte]: new Date(startDate)
                }
            },
            attributes: ['id', 'startDate','endDate', 'PokemonId'],

        })

        const busyIds = busy.map(item => item.PokemonId)
        
        const available = await Pokemon.findAll({
            where : {
                id: {
                    [Op.notIn]: busyIds
                }
            },
            attributes: ['id', 'name'] //'api_id','name', 'image', 'attack'],
        })

        return available
        
    } catch (error) {
        throw error
    }
}

module.exports = getDBAvailablePokemons;