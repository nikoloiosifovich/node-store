import { Router } from 'express'

import { productsController } from './controllers/productsController.js'

const appRoutes = Router()

appRoutes.get('/', productsController().getProducts)
appRoutes.get('/:slug', productsController().getProductBySlug)
appRoutes.post('/', productsController().createProduct)
appRoutes.put('/:id', productsController().updateProduct)
appRoutes.delete('/:id', productsController().deleteProduct)

export { appRoutes }
