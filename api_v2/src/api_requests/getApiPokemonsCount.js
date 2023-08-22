const axios = require('axios');

const getApiPokemonsCount = async () => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/`
        const { data } = await axios.get(url)
        const { count } = data
        return count

    } catch (error) {
        throw error
    }
}

module.exports = getApiPokemonsCount;