const app = require('../app')
const request = require('supertest')

let id;

test('GET/ traer los actores', async () => { 
    const response = await request(app).get('/actors')
    expect(response.statusCode).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
})


test('POST/actors crear un genero  ', async() => {

    const actorsCreate = {
        firstName: 'Jorge',
        lastName: 'Sanchez',
        nationality: 'Colombiano',
        image: 'XXXXXXXXXXXXXXXXXXXXXX',
        birthday: '2000/01/01'
    }

    const response = await request(app).post('/actors').send(actorsCreate)
    id = response.body.id
    expect(response.status).toBe(201)
    expect(response.body.id).toBeDefined()
    expect(response.body.firstName).toBe(actorsCreate.firstName)
});

test('PUT/actors/:id actualizar genero', async () => {
    const actorsUpdate = {
        firstName: 'Jorge test',
        lastName: 'Sanchez test',
        nationality: 'Colombiano',
        image: 'jtestimj.png',
        birthday: '2000/01/01'
    }
    const response = await request(app).put(`/actors/${id}`).send(actorsUpdate)
    expect(response.statusCode).toBe(200)
    expect(response.body.id).toBeDefined()
    expect(response.body.firstName).toBe(actorsUpdate.firstName)
})



test('DELETE/actors/:id eliminar genero', async () => {
    const response = await request(app).delete(`/actors/${id}`)
    expect(response.statusCode).toBe(204)
})