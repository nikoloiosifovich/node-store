import Customer from '../models/customer.js'

const customerRepository = () => ({
  create: (customer) => Customer.create(customer)
})

export default customerRepository()
