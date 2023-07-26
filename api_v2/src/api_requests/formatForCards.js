
// This function formats the data coming from an official api /:id request to my api Cards Format

module.exports = (data) => {
    const { id, name, stats, types } = data
    const image = data.sprites.other.dream_world.front_default
        || data.sprites.other['official-artwork'].front_default
        || data.sprites.other['official-artwork'].front_shiny
        || data.sprites.front_default
        || 'no-image'
    const pokemon = { id, name, image }
    const props = ['attack']
    props.forEach(prop => {
        stats.forEach(stat => {
            if (stat.stat.name === prop) {
                pokemon[prop] = stat.base_stat
            }
        })
    })
    pokemon.Types = types.map(type => {
        return { name: type.type.name }
    })
    
    return pokemon
}