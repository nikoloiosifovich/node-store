import Customer from '../models/customer.js'

const customerRepository = () => ({
  get: () => Customer.find(),

  create: (customer) => Customer.create(customer)
})

export default customerRepository()
