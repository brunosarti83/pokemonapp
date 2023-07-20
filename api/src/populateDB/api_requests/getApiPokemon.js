const axios = require('axios');


const getApiPokemon = async (input) => {
    try {
        const url = (Boolean(Number(input))) ? `https://pokeapi.co/api/v2/pokemon/${input}` : input
        const { data } = await axios.get(url)
        const { id, name, height, weight, stats, origTypes } = data
        const image = data.sprites.other['official-artwork'].front_default
        const originalId = id
        const pokemon = { originalId, name, image, height, weight }
        const props = [ 'hp', 'attack', 'defense', 'speed' ]
        props.forEach(prop => {
            stats.forEach(stat => {
                if (stat.name === prop) {
                    pokemon[prop] = stat.base_stat
                }
            })
        })
        const types = []
        origTypes.forEach(tipo => { types.push(tipo.type.name) })
        return { pokemon, types }
        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = getApiPokemon;