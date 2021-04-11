import Product from '../models/product.js'

const productRepository = () => ({
  get: () => Product.find({ active: true }, 'title price slug')
})

export default productRepository()
