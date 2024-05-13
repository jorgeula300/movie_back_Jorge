const express = require('express');
const routesGenres = require('./routesGeneres');
const routesActors = require('./routesActors');
const routesDirectors = require('./routesDirectors');
const routesMovies = require('./routesMovies');
const router = express.Router();

// colocar las rutas aquí
router.use(routesGenres);
router.use(routesActors);
router.use(routesDirectors);
router.use(routesMovies);

module.exports = router;