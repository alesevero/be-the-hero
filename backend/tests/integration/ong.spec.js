const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Ong service integration tests', () => {

  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create a new Ong', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "Ong de Teste",
        email: "teste@ong.com",
        whatsapp: "51000000000",
        city: "Porto Alegre",
        uf: "RS"
    })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})