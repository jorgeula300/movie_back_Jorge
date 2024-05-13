const { getAll, create, getOne, remove, update } = require('../controllers/genre.controllers');
const express = require('express');

const routesGenres = express.Router();

routesGenres.route('/genres')
    .get(getAll)
    .post(create);

routesGenres.route('/genres/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routesGenres;