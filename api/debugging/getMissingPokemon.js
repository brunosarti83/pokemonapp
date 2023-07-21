const { Pokemon } = require('../src/db')

 
const getMissingPokemon = async (req, res) => {
    try {
        const pokemonIds = await Pokemon.findAll({
            attributes: ['originalId']
        }) 
        res.status(200).json(pokemonIds)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getMissingPokemon