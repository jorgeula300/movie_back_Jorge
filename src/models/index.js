const Movies = require('./Movies.models');
const Directors = require('./Directors.models');
const Genres = require('./Genres.models');
const Actors = require('./Actors.models');

Movies.belongsToMany(Genres, { through: 'movies_genres' });
Genres.belongsToMany(Movies, { through: 'movies_genres' });
Movies.belongsToMany(Actors, { through: 'movies_actors' });
Actors.belongsToMany(Movies, { through: 'movies_actors' });
Movies.belongsToMany(Directors, { through: 'movies_directors' });
Directors.belongsToMany(Movies, { through: 'movies_directors' });