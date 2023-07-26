const axios = require('axios');
const getApiPokemon = require('./getApiPokemon');


const getApiAllPokemons = async () => {
    try {
        const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=2000`
        const { data } = await axios.get(endpoint)
        const { results } = data
        const requests = results.map(result => getApiPokemon(result.url))
        const responses = await Promise.all(requests)
        return responses
        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = getApiAllPokemons;