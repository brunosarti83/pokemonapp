const postPokemonHandler = require('../handlers/postPokemonHandler');

const postPokemon = async (req, res) => {
    const { typeIds, ...pokemon } = req.body
    if (typeIds.length < 2 || typeIds.length > 3) {
        res.status(400).json({ error: 'Your Pokemon must belong to 2 or up to 3 Types' })
    } else {
        try {
            const result = await postPokemonHandler(pokemon, typeIds)
            res.status(200).json({ created: true })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

module.exports = postPokemon;