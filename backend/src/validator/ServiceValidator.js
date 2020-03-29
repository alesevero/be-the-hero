const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {

  createOngValidator() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(), 
        email: Joi.string().required().email(), 
        whatsapp: Joi.number().required().min(10).max(11), 
        city: Joi.string().required(), 
        uf: Joi.string().required().length(2)
      }),
    })
  },

  getIncidentsByOngValidator() {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    })
  },

  getIncidentsValidator() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
      })
    })
  },

  deleteIncidentValidator() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
      })
    })
  },

  loginValidator() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
      })
    })
  },

  createIncidentValidator() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
      }),
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    })
  },
}