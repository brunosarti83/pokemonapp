const getAllPokemonsHandler = require('../handlers/getAllPokemonsHandler');
const getPokemonByNameHandler = require('../handlers/getPokemonByNameHandler');

const getPokemons = async (req, res) => {
    const { name } = req.query
    try {
        if (name) {
            lowerCaseName = name.toLowerCase()
            const pokemon = await getPokemonByNameHandler(lowerCaseName)
            res.status(200).json(pokemon)
        } else {
            const allPokemons = await getAllPokemonsHandler()
            res.status(200).json(allPokemons)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getPokemons;