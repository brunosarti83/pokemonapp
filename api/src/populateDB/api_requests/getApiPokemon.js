const axios = require('axios');


const getApiPokemon = async (input) => {
    try {
        const url = (Boolean(Number(input))) ? `https://pokeapi.co/api/v2/pokemon/${input}` : input
        const { data } = await axios.get(url)
        const { id, name, height, weight, stats, types } = data
        const image = data.sprites.other.dream_world.front_default 
        || data.sprites.other['official-artwork'].front_default
        || data.sprites.other['official-artwork'].front_shiny
        || data.sprites.front_default
        || 'no-image'
        const originalId = id
        const pokemon = { originalId, name, image, height, weight }
        const props = [ 'hp', 'attack', 'defense', 'speed' ]
        props.forEach(prop => {
            stats.forEach(stat => {
                if (stat.stat.name === prop) {
                    pokemon[prop] = stat.base_stat
                }
            })
        })
        const typeIds = []
        types.forEach(type => { 
            const url = type.type.url
            const id = url.split('/').at(-2)
            typeIds.push(Number(id)) 
        })
        return { pokemon, typeIds }
        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = getApiPokemon;