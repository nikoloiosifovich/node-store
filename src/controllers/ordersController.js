import orderRepository from '../repositories/orderRepository.js'

const orderController = () => ({
  getOrders: async (req, res) => {
    try {
      const orders = await orderRepository.get()

      res.json(orders)
    } catch (error) {
      res.status(400).json({
        message: 'Unable to list orders'
      })
    }
  },

  createOrder: async (req, res) => {
    try {
      const savedOrder = await orderRepository.create(req.body)

      res.status(201).json(savedOrder)
    } catch (error) {
      res.status(400).json({
        message: 'Unable to creates an order'
      })
    }
  }
})

export default orderController()
