const axios = require('axios');

const getApiTypes = async () => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/type`)
    const { results } = data
    const types = []
    results.forEach(obj => {
        const { name } = obj
        types.push({ name })
    });
    return types
}

module.exports = getApiTypes;