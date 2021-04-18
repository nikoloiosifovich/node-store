import Order from '../models/order.js'
import { v4 as uuidv4 } from 'uuid'

const orderRepository = () => ({
  get: () => Order
    .find({}, 'number status customer items')
    .populate('customer', 'name')
    .populate('items.product', 'title'),

  create: (order) => {
    Object.assign(order, {
      number: uuidv4()
    })

    return Order.create(order)
  }
})

export default orderRepository()
