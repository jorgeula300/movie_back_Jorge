const app = require('../app')
const request = require('supertest')

let id;


test('GET/ traer los directores', async () => { 
    const response = await request(app).get('/directors')
    expect(response.statusCode).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
})

test('POST/directors crear un genero  ', async() => {

    const directorsCreate = {
        firstName: 'Jorge',
        lastName: 'Sanchez',
        nationality: 'Colombiano',
        image: 'XXXXXXXXXXXXXXXXXXXXXX',
        birthday: '2000/01/01'
    }

    const response = await request(app).post('/directors').send(directorsCreate)
    id = response.body.id
    expect(response.status).toBe(201)
    expect(response.body.id).toBeDefined()
    expect(response.body.firstName).toBe(directorsCreate.firstName)
});

test('PUT/directors/:id actualizar genero', async () => {
    const directorsUpdate = {
        firstName: 'Jorge test',
        lastName: 'Sanchez test',
        nationality: 'Colombiano',
        image: 'jtestimj.png',
        birthday: '2000/01/01'
    }
    const response = await request(app).put(`/directors/${id}`).send(directorsUpdate)
    expect(response.statusCode).toBe(200)
    expect(response.body.id).toBeDefined()
    expect(response.body.firstName).toBe(directorsUpdate.firstName)
})



test('DELETE/directors/:id eliminar genero', async () => {
    const response = await request(app).delete(`/directors/${id}`)
    expect(response.statusCode).toBe(204)
})