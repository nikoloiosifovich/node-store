import Product from '../models/product.js'

const productRepository = () => ({
  get: () => Product.find({ active: true }, 'title price slug'),

  getBySlug: (slug) => Product.findOne({
    slug,
    active: true
  }, 'title description price slug tags'),

  getById: (id) => Product.findById(id),

  getByTag: (tag) => Product.findOne({
    tags: tag,
    active: true
  }, 'title description price slug tags'),

  createProduct: (product) => Product.create(product)
})

export default productRepository()
