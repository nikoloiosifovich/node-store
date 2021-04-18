import { Router } from 'express'
import { celebrator, Segments, Joi } from 'celebrate'

import customersController from '../controllers/customersController.js'

const customerRoutes = Router()

const celebrate = celebrator({ reqContext: true }, { convert: true })

customerRoutes.get('/', customersController.getCustomers)

customerRoutes.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required().strict()
  })
}), customersController.createCustomer)

export default customerRoutes
