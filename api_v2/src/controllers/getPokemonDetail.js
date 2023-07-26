const getPokemonDetailHandler = require('../handlers/getPokemonDetailHandler');

const getPokemonDetail = async (req, res) => {
    const { idPokemon } = req.params
    try {
        const pokemon = await getPokemonDetailHandler(idPokemon)
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getPokemonDetail;