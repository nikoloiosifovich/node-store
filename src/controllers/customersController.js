import customerRepository from '../repositories/customerRepository.js'

const customersController = () => ({
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
