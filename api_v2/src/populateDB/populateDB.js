const getApiTypes = require('../api_requests/getApiTypes.js');
const getApiAllPokemons = require('../api_requests/getApiAllPokemons.js');
const getApiPokemonsCount = require('../api_requests/getApiPokemonsCount.js');
const { Op } = require('sequelize');
const { Type, Pokemon } = require('../db.js');

const populateDB = async () => {
    try {
        console.log('starting to populate DB...')

        const types = await Type.findAll()
        if (!types.length) {
            const apiTypes = await getApiTypes()
            await Type.bulkCreate(apiTypes)
        }

        const apiPokemonsOnDatabase = await Pokemon.count({where: {
            api_id : {[Op.not] : null}
        }})
        const pokemonsInApi = await getApiPokemonsCount()
        // si hay más Pokes en la api que en la bbdd
        if (apiPokemonsOnDatabase < pokemonsInApi) {
            // eliminamos todos los de la bbdd provenientes de api
            await Pokemon.destroy({where: {
                api_id : {[Op.not] : null}
            }})
            // y volvemos a cargarlos
            const apiPokemons = await getApiAllPokemons()

            apiPokemons.map(async (apiPokemon) => {
                const {Types, ...pokemon} = apiPokemon
                const newPokemon = await Pokemon.create(pokemon)
                const typeIds = Types.map(type => type.id)
                await newPokemon.addTypes(typeIds)
            })

        }

        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = populateDB;
