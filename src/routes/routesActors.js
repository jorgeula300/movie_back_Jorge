const { getAll, create, getOne, remove, update } = require('../controllers/actor.controllers');
const express = require('express');

const routesActors = express.Router();

routesActors.route('/actors')
    .get(getAll)
    .post(create);

routesActors.route('/actors/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routesActors;