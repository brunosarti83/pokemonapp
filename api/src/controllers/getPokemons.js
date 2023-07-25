const getPokemonsHandler = require('../handlers/getPokemonsHandler');
const getPokemonByNameHandler = require('../handlers/getPokemonByNameHandler');

const getPokemons = async (req, res) => {
    const { name } = req.query
    try {
        if (name) {
            const pokemon = await getPokemonByNameHandler(name)
            res.status(200).json(pokemon)
        } else {
            const allPokemons = await getPokemonsHandler()
            res.status(200).json(allPokemons)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getPokemons;