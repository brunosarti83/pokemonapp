const axios = require('axios');
const formatPokemon = require('./formatPokemon')

const getApiPokemon = async (input) => {
    try {
        const url = (Boolean(Number(input))) ? `https://pokeapi.co/api/v2/pokemon/${input}` : input
        const { data } = await axios.get(url)
        const pokemon = formatPokemon(data) 
        return pokemon

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = getApiPokemon;