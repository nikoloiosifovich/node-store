import Product from '../models/product.js'
import productRepository from '../repositories/productRepository.js'

const productsController = () => ({
  getProducts: async (req, res) => {
    try {
      const products = await productRepository.get()

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

  getProductById: async (req, res) => {
    try {
      const { id } = req.params

      const product = await Product.findById(id)

      res.json(product)
    } catch (error) {
      res.status(404).json({
        message: 'Product not found.'
      })
    }
  },

  getProductByTag: async (req, res) => {
    try {
      const { tag } = req.params

      const product = await Product.find({
        tags: tag,
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

  updateProduct: async (req, res) => {
    try {
      const { id } = req.params
      const { title, description, slug, price } = req.body

      const updatedProduct = await Product.findByIdAndUpdate(id, {
        $set: {
          title,
          description,
          slug,
          price
        }
      }, (result) => result)

      if (!updatedProduct) {
        throw new Error()
      }

      res.json(updatedProduct)
    } catch (error) {
      res.status(400).json({
        message: 'Unable to updates product.'
      })
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params

      await Product.findOneAndRemove(id)

      res.json({
        message: 'Product deleted'
      })
    } catch (error) {
      res.status(400).json({
        message: 'Unable to updates product.'
      })
    }
  }
})

export default productsController()
