const axios = require('axios');
const formatPokemon = require('./formatPokemon')

const getApiPokemonByName = async (name) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`
        const { data } = await axios.get(url)
        const pokemon = formatPokemon(data)
        return [pokemon]
       
    } catch (error) {
        return []
    }
}

module.exports = getApiPokemonByName;