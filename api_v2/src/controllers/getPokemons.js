const getAllPokemonsHandler = require('../handlers/getAllPokemonsHandler');
const getPokemonByNameHandler = require('../handlers/getPokemonByNameHandler');

const getPokemons = async (req, res) => {
    const { name, limit, offset } = req.query
    try {
        if (name) {
            lowerCaseName = name.toLowerCase()
            const pokemons = await getPokemonByNameHandler({limit, offset, lowerCaseName})
            res.status(200).json(pokemons)
        } else {
            const pokemons = await getAllPokemonsHandler({limit, offset})
            res.status(200).json(pokemons)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getPokemons;