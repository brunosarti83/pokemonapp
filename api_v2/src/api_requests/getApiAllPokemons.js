const axios = require('axios');
const getApiPokemon = require('./getApiPokemon');
const formatPokemon = require('./formatPokemon');


const getApiAllPokemons = async () => {
    try {
        let requests = []
        let next = `https://pokeapi.co/api/v2/pokemon?limit=2000`  
        while (next) {
            const { data } = await axios.get(next)
            const { results } = data
            requests = [...requests, ...results.map(result => getApiPokemon(result.url, formatPokemon))]
            next = data.next
        }
        const responses = await Promise.all(requests)
        return responses
        
    } catch (error) {
        throw error
    }
}



module.exports = getApiAllPokemons;