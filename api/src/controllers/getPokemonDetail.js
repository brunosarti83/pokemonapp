const getPokemonDetailHandler = require('../handlers/getPokemonDetailHandler');

const getPokemonDetail = async (req, res) => {
    const { idPokemon } = req.params
    try {
        const pokemon = await getPokemonDetailHandler(idPokemon)
        if (pokemon.name) {
            res.status(200).json(pokemon)
        } else {
            res.status(404).json({error: 'Not Found'})
        }
    } catch (error) {
        res.status(404).json({error: 'Not Found'})
    }
}

module.exports = getPokemonDetail;