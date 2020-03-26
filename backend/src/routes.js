const express = require('express')
const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncidentController')
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.post('/ongs', OngController.create)
routes.get('/ongs', OngController.index)
// ong id exists in header.authorization
routes.get('/ongs/incidents', ProfileController.index) 

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/profile/:id', IncidentController.delete)

module.exports = routes