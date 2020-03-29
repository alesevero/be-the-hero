const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')
const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncidentController')
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')

const ServiceValidator = require('./validator/ServiceValidator')

const routes = express.Router()

// ong id exists in header.authorization
routes.get('/ongs/incidents', ServiceValidator.getIncidentsByOngValidator, ProfileController.index) 
routes.get('/ongs', OngController.index)
routes.get('/incidents', ServiceValidator.getIncidentsValidator(), IncidentController.index)

routes.post('/sessions', ServiceValidator.loginValidator(), SessionController.create)
routes.post('/ongs', ServiceValidator.createOngValidator(), OngController.create)
routes.post('/incidents', ServiceValidator.createIncidentValidator(), IncidentController.create)

routes.delete('/incidents/:id', ServiceValidator.deleteIncidentValidator(), IncidentController.delete)

module.exports = routes
