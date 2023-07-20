const { Pokemon, Type } = require('../db.js');
const getApiPokemon = require('./api_requests/getApiPokemon.js');
const getApiTypes = require('./api_requests/getApiTypes.js');
const getApiAllPokemons = require('./api_requests/getApiAllPokemons.js');

const populateDB = async () => {
    try {
        console.log('starting to populate DB...')
        const apiTypes = await getApiTypes()
        await Type.bulkCreate(apiTypes)
       
        const DB_Types = await Type.findAll()
        const AllPokemons = await getApiAllPokemons()
        const requests = AllPokemons.map(req => getApiPokemon(req.url))
        const responses = await Promise.all(requests)
        responses.forEach(async (resp) => {
            const { pokemon, origTypes } = resp
            const newPokemon = await Pokemon.create(pokemon)
            const typeIds = origTypes.map(type => {
                const DB_Type = DB_Types.filter(item => item.name === type)
                return DB_Type.id
            })
            await newPokemon.addTypes(typeIds)
        })
        console.log('...database fully populated')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = populateDB;
