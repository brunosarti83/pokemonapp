const axios = require('axios');
const getApiPokemon = require('./getApiPokemon');
const formatForCards = require('./formatForCards');


const getApiAllPokemons = async () => {
    try {
        let requests = []
        let next = `https://pokeapi.co/api/v2/pokemon`  
        for (let index = 0; index < 4; index++) {
            const { data } = await axios.get(next)
            const { results } = data
            requests = [...requests, ...results.map(result => getApiPokemon(result.url, formatForCards))]
            next = data.next
        }
        const responses = await Promise.all(requests)
        return responses
        
    } catch (error) {
        throw error
    }
}



module.exports = getApiAllPokemons;