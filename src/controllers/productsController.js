import Product from '../models/product.js'

const productsController = () => ({
  getProducts: (req, res) => {
    return res.send({
      title: 'Node Store API',
      version: '0.0.1'
    })
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
