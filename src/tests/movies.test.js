const app = require('../app')
const request = require('supertest');
const Genres = require('../models/Genres.models');
const Actors = require('../models/Actors.models');
const Directors = require('../models/Directors.models');

let id;

test('GET/ traer las peliculas', async () => {
    const response = await request(app).get('/movies')
    expect(response.statusCode).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
})

test('POST/movies crear una pelicula ', async () => {

    const moviesCreate = {
        name: 'Jorge test',
        image: 'jtestimj.png',
        synopsis: 'Jorge test',
        releaseYear: 2000
    }

    const response = await request(app).post('/movies').send(moviesCreate)
    console.log(response)
    id = response.body.id
    expect(response.status).toBe(201)
    expect(response.body.id).toBeDefined()
    expect(response.body.name).toBe(moviesCreate.name)
});

test('POST/movies/:id/actors', async () => {
    const actors = await Actors.create({
        firstName: 'Jorge test',
        lastName: 'Sanchez test',
        nationality: 'Colombiano',
        image: 'jtestimj.png',
        birthday: '2000/01/01'
    })
    const response = await request(app).post(`/movies/${id}/actors`).send([actors.id])
    await actors.destroy()
    expect(response.statusCode).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toBe(1)
})

test('POST/movies/:id/directors', async () => {
    const directors = await Directors.create({
        firstName: 'Jorge test',
        lastName: 'Sanchez test',
        nationality: 'Colombiano',
        image: 'jtestimj.png',
        birthday: '2000/01/01'
    })
    const response = await request(app).post(`/movies/${id}/directors`).send([directors.id])
    await directors.destroy()
    expect(response.statusCode).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toBe(1)
})

test('POST/movies/:id/genres', async () => {
    const genres = await Genres.create({
        name: 'testGenres'
    })
    const response = await request(app).post(`/movies/${id}/genres`).send([genres.id])
    await genres.destroy()
    expect(response.statusCode).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toBe(1)
})

test('PUT/movies/:id actualizar peliculas', async () => {
    const moviesUpdate = {
        name: 'Jorge test 2',
        image: 'jtestimj2.png',
        synopsis: 'Jorge test 2',
        releaseYear: 2000
    }
    const response = await request(app).put(`/movies/${id}`).send(moviesUpdate)
    expect(response.statusCode).toBe(200)
    expect(response.body.id).toBeDefined()
    expect(response.body.name).toBe(moviesUpdate.name)
})






test('DELETE/movies/:id eliminar peliculas', async () => {
    const response = await request(app).delete(`/movies/${id}`)
    expect(response.statusCode).toBe(204)
})