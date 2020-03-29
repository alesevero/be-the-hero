const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Ong unit tests', () => {

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
        name: "APAD2",
        email: "contato@fa.com",
        whatsapp: "4100000000",
        city: "Rio do Sul",
        uf: "SC"
    })

    console.log(response.body)
    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})