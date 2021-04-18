import { Router } from 'express'
import { celebrator, Segments, Joi } from 'celebrate'

import productsController from '../controllers/productsController.js'

const productRoutes = Router()

const celebrate = celebrator({ reqContext: true }, { convert: true })

productRoutes.get('/', productsController.getProducts)
productRoutes.get('/:slug', productsController.getProductBySlug)
productRoutes.get('/admin/:id', productsController.getProductById)
productRoutes.get('/tags/:tag', productsController.getProductByTag)

productRoutes.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().min(5).required(),
    slug: Joi.string().min(5).required(),
    description: Joi.string().min(10).required(),
    price: Joi.number().positive().required(),
    active: Joi.boolean().default(true).required(),
    tags: Joi.array().not().empty().required()
  })
}), productsController.createProduct)

productRoutes.put('/:id', productsController.updateProduct)

productRoutes.delete('/:id', productsController.deleteProduct)

export default productRoutes
