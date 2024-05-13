const { getAll, create, getOne, remove, update } = require('../controllers/directors.contrillers');
const express = require('express');

const routesDirectors = express.Router();

routesDirectors.route('/directors')
    .get(getAll)
    .post(create);

routesDirectors.route('/directors/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routesDirectors;