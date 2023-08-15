const axios = require('axios');
const getApiPokemon = require('./getApiPokemon');
const formatForCards = require('./formatForCards');


const getApiAllPokemons = async () => {
    try {
        let requests = []
        let next = `https://pokeapi.co/api/v2/pokemon?limit=100`  
        //while (next) {
            const { data } = await axios.get(next)
            const { results } = data
            requests = [...requests, ...results.map(result => getApiPokemon(result.url, formatForCards))]
            next = data.next
        //}
        const responses = await Promise.all(requests)
        return responses
        
    } catch (error) {
        console.log(error.message)
    }
}



module.exports = getApiAllPokemons;