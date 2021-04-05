import Product from '../models/product.js'

const productsController = () => ({
  getProducts: async (req, res) => {
    try {
      const products = await Product.find({ active: true }, 'title slug price')

      res.json(products)
    } catch (error) {
      res.status(400).json({
        message: 'Unable to list products.'
      })
    }
  },

  getProductBySlug: async (req, res) => {
    try {
      const { slug } = req.params

      const product = await Product.findOne({
        slug,
        active: true
      }, 'title description price slug tags')

      res.json(product)
    } catch (error) {
      res.status(404).json({
        message: 'Product not found.'
      })
    }
  },

  createProduct: async (req, res) => {
    try {
      const product = new Product(req.body)
      const savedProduct = await product.save()

      res.status(201).json(savedProduct)
    } catch (error) {
      res.status(400).json({
        message: 'Unable to create a product.'
      })
    }
  },

  updateProduct: (req, res) => {
    const { id } = req.params
    const { title } = req.body

    return res.json({
      id,
      title
    })
  },

  deleteProduct: (req, res) => {
    return res.json({
      message: 'Deleted!'
    })
  }
})

export { productsController }
