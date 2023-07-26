const axios = require('axios');

const getApiPokemon = async (input, formattingFunction) => {
    try {
        const url = (Boolean(Number(input))) ? `https://pokeapi.co/api/v2/pokemon/${input}` : input
        const { data } = await axios.get(url)
        const pokemon = formattingFunction(data) 
        return pokemon

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = getApiPokemon;