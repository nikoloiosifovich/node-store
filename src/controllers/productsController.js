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

      const product = await productRepository.getBySlug(slug)

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

      const product = await productRepository.getById(id)

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

      const product = await productRepository.getByTag(tag)

      res.json(product)
    } catch (error) {
      res.status(404).json({
        message: 'Product not found.'
      })
    }
  },

  createProduct: async (req, res) => {
    try {
      const savedProduct = await productRepository.createProduct(req.body)

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

      const updatedProduct = await productRepository.updateProduct(
        id,
        title,
        description,
        slug,
        price
      )

      if (!updatedProduct) throw new Error()

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

      const deletedProduct = await productRepository.deleteProduct(id)

      if (!deletedProduct) throw new Error()

      res.json({
        message: 'Product deleted'
      })
    } catch (error) {
      res.status(400).json({
        message: 'Unable to deletes product.'
      })
    }
  }
})

export default productsController()
