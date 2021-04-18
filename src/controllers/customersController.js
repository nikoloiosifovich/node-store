import customerRepository from '../repositories/customerRepository.js'

const customersController = () => ({
  getCustomers: async (req, res) => {
    try {
      const customers = await customerRepository.get()

      res.json(customers)
    } catch (error) {
      res.status(400).json({
        message: 'Unable to list customers'
      })
    }
  },

  createCustomer: async (req, res) => {
    try {
      const savedCustomer = await customerRepository.create(req.body)

      res.status(201).json(savedCustomer)
    } catch (error) {
      res.status(400).json({
        message: 'Unable to create a customer'
      })
    }
  }
})

export default customersController()
