const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemons = require('../controllers/getPokemons')
const getTypes = require('../controllers/getTypes')
const getPokemonDetail = require('../controllers/getPokemonDetail')
const postPokemon = require('../controllers/postPokemon')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons/:idPokemon', getPokemonDetail)
router.get('/pokemons', getPokemons)
router.post('/pokemons', postPokemon)
router.get('/types', getTypes)

module.exports = router;
