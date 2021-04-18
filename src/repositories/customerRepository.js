import Customer from '../models/customer.js'
import md5 from 'md5'

const customerRepository = () => ({
  get: () => Customer.find(),

  create: (customer) => {
    customer.password = md5(customer.password + process.env.SALT_KEY)

    return Customer.create(customer)
  }
})

export default customerRepository()
