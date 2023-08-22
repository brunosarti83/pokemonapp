const axios = require('axios');
// functions
const formatForCards = require('./formatForCards');
const getApiPokemon = require('./getApiPokemon');

const getApiPokemonByName = async (name) => {
    try {
        let requests = []
        let next = `https://pokeapi.co/api/v2/pokemon?limit=2000` 
        while (next) {
            const { data } = await axios.get(next)
            const { results } = data
            results.forEach(result => {
                if (result.name.includes(name)) {
                    requests.push(getApiPokemon(result.url, formatForCards))
                }
            })
            next = data.next
        }
        
        if (requests.length) {
            const responses = await Promise.all(requests)
            return responses
        } else {
            return []
        }

    } catch (error) {
        throw error
    }
}





// const oldGetApiPokemonByName = async (name) => {
//     try {
//         const url = `https://pokeapi.co/api/v2/pokemon/${name}`
//         const { data } = await axios.get(url)
//         const pokemon = formatForCards(data)
//         return [pokemon]
       
//     } catch (error) {
//         return []
//     }
// }

module.exports = getApiPokemonByName;