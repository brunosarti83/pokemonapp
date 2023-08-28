const getAllPokemonsHandler = require('../handlers/getAllPokemonsHandler');
const getPokemonByNameHandler = require('../handlers/getPokemonByNameHandler');

const getPokemons = async (req, res) => {
    try {
        const { name, ...query } = req.query
        if (name) {
            query.name = name.toLowerCase()
            const pokemons = await getPokemonByNameHandler({ ...query })
            res.status(200).json(pokemons)
        } else {
            const pokemons = await getAllPokemonsHandler({ ...query })
            res.status(200).json(pokemons)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getPokemons;