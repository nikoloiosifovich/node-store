const productsController = () => ({
  getProducts: (req, res) => {
    return res.send({
      title: 'Node Store API',
      version: '0.0.1'
    })
  },

  createProduct: (req, res) => {
    const { id, title } = req.body

    return res.status(201).json({
      id,
      title
    })
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
