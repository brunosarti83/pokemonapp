const getPokemonsHandler = require('../handlers/getPokemonsHandler');

const getPokemons = async (req, res) => {
    try {
        const pokemons = await getPokemonsHandler()
        res.status(200).json(pokemons)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getPokemons;