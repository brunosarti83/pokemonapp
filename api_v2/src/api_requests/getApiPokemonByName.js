const axios = require('axios');
const formatForCards = require('./formatForCards');


const getApiPokemonByName = async (name) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`
        const { data } = await axios.get(url)
        const pokemon = formatForCards(data)
        return [pokemon]
       
    } catch (error) {
        return []
    }
}

module.exports = getApiPokemonByName;