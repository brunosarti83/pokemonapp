const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemons = require('../controllers/getPokemons')
const getTypes = require('../controllers/getTypes')
const getPokemonDetail = require('../controllers/getPokemonDetail')

const getMissingPokemon = require('../../debugging/getMissingPokemon')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons/:idPokemon', getPokemonDetail)
router.use('/pokemons', ) // query
router.use('/pokemons', getPokemons)
router.use('/types', getTypes)


router.use('/debug', getMissingPokemon)

module.exports = router;
