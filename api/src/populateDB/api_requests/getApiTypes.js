const axios = require('axios');

const getApiTypes = async () => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/type`)
    const { results } = data
    const types = []
    results.forEach(obj => {
        types.push(obj.name)
    });
    return types
}

module.exports = getApiTypes;