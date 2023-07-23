const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemons = require('../controllers/getPokemons')
const getTypes = require('../controllers/getTypes')
const getPokemonDetail = require('../controllers/getPokemonDetail')
const getPokemonByName = require('../controllers/getPokemonByName')
const postPokemon = require('../controllers/postPokemon')

//eliminar
const getMissingPokemon = require('../../debugging/getMissingPokemon')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons/:idPokemon', getPokemonDetail)
router.get('/pokemons', getPokemonByName)
router.get('/pokemons', getPokemons)
router.post('/pokemons', postPokemon)
router.get('/types', getTypes)

//eliminar
router.get('/debug', getMissingPokemon)

module.exports = router;
