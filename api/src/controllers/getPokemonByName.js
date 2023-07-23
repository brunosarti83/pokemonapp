const getPokemonByNameHandler = require('../handlers/getPokemonByNameHandler');

const getPokemonByName = async (req, res) => {
    const { name } = req.query
    try {
        const pokemon = await getPokemonByNameHandler(name)
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getPokemonByName;