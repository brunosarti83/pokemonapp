const getApiPokemon = require('./api_requests/getApiPokemon.js');
const getApiTypes = require('./api_requests/getApiTypes.js');
const getApiAllPokemons = require('./api_requests/getApiAllPokemons.js');
const { Type, Pokemon } = require('../db.js');

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
            try {
                const { pokemon, typeIds } = resp
                const newPokemon = await Pokemon.create(pokemon)
                await newPokemon.addTypes(typeIds)
            } catch (error) {
                console.log(error.message)
            }
        })
        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = populateDB;
