const app = require('../app')
const request = require('supertest')

let id;

test('GET/genres traer los generos  ', async() => { 
    const response = await request(app).get('/genres')
    expect(response.statusCode).toBe(200)
    expect(response.body).toBeInstanceOf(Array);
    
});

test('POST/genres crear un genero  ', async() => {

    const genderCreate = {
        name: 'Accion'
    }
    const response = await request(app).post('/genres').send(genderCreate)
    id = response.body.id
    expect(response.status).toBe(201)
    expect(response.body.id).toBeDefined()
    expect(response.body.name).toBe(genderCreate.name)
});

test('PUT/genres/:id actualizar genero', async () => {
    const genderUpdate = {
        name: 'Aventura'
    }
    const response = await request(app).put(`/genres/${id}`).send(genderUpdate)
    expect(response.statusCode).toBe(200)
    expect(response.body.id).toBeDefined()
    expect(response.body.name).toBe(genderUpdate.name)
})


test('DELETE/genres/:id eliminar genero', async () => {
    const response = await request(app).delete(`/genres/${id}`)
    expect(response.statusCode).toBe(204)
})

