const getPokemons = require('../handlers/getPokemons');

const getPokemonsCtrl = async (req, res) => {
    try {
        const pokemons = await getPokemons()
        res.status(200).json(pokemons)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getPokemonsCtrl;