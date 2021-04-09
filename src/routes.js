import { Router } from 'express'
import { celebrator, Segments, Joi } from 'celebrate'

import { productsController } from './controllers/productsController.js'

const appRoutes = Router()
const celebrate = celebrator({ reqContext: true }, { convert: true })

appRoutes.get('/', productsController().getProducts)
appRoutes.get('/:slug', productsController().getProductBySlug)
appRoutes.get('/admin/:id', productsController().getProductById)
appRoutes.get('/tags/:tag', productsController().getProductByTag)

appRoutes.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().min(5).required(),
    slug: Joi.string().min(5).required(),
    description: Joi.string().min(10).required(),
    price: Joi.number().positive().required(),
    active: Joi.boolean().default(true).required(),
    tags: Joi.array().not().empty().required()
  })
}), productsController().createProduct)

appRoutes.put('/:id', productsController().updateProduct)

appRoutes.delete('/:id', productsController().deleteProduct)

export { appRoutes }
