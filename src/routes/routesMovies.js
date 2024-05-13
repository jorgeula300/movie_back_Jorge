const { getAll, create, getOne, remove, update, setMovieGenres, setMoviesActors, setMoviesDirectors } = require('../controllers/movie.controllers');
const express = require('express');

const routeMovies = express.Router();

routeMovies.route('/movies')
    .get(getAll)
    .post(create);

routeMovies.route('/movies/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

routeMovies.route('/movies/:id/genres')
    .post(setMovieGenres);

routeMovies.route('/movies/:id/actors')
    .post(setMoviesActors); 

routeMovies.route('/movies/:id/directors')
    .post(setMoviesDirectors);

module.exports = routeMovies;