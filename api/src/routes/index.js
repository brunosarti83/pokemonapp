const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemonsCtrl = require('../controllers/getPokemons')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', getPokemonsCtrl)


module.exports = router;
