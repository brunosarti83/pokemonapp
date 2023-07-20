const { Pokemon, Type } = require('../db.js');
const getApiPokemon = require('./api_requests/getApiPokemon.js');
const getApiTypes = require('./api_requests/getApiTypes.js');
const getApiAllPokemons = require('./api_requests/getApiAllPokemons.js');

const populateDB = async () => {
    try {
        const apiTypes = await getApiTypes()
        apiTypes.forEach(async (type) => {
            await Type.create(type)
        })
        const DB_Types = await Type.findAll()
        const AllPokemons = await getApiAllPokemons()
        const requests = AllPokemons.map(req => getApiPokemon(req.url))
        const responses = await Promise.All(requests)
        responses.forEach(async (resp) => {
            const { pokemon, types } = resp
            const newPokemon = await Pokemon.create(pokemon)
            const typeIds = types.map(type => {
                const DB_Type = DB_Types.filter(item => item.name === type)
                return DB_Type.id
            })
            await newPokemon.addTypes(typeIds)
        })
    } catch (error) {
        console.log(error.message)
    }
}

