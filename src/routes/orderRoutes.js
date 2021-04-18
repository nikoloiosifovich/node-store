import { Router } from 'express'
import { celebrator, Segments, Joi } from 'celebrate'

import orderController from '../controllers/ordersController.js'

const orderRoutes = Router()

const celebrate = celebrator({ reqContext: true }, { convert: true })

orderRoutes.get('', orderController.getOrders)

orderRoutes.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    customer: Joi.string().min(3).required(),
    items: Joi.array().min(1).required()
  })
}), orderController.createOrder)

export default orderRoutes
