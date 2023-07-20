const axios = require('axios');


const getApiAllPokemons = async () => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=2000`
        const { data } = await axios.get(url)
        return data.results
        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = getApiAllPokemons;