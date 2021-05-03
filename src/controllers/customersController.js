import customerRepository from '../repositories/customerRepository.js'
import emailService from '../services/emailService.js'

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
      const { name, email } = req.body
      const subject = 'Bem vindo ao Node Store'

      const savedCustomer = await customerRepository.create(req.body)

      emailService.sendMail(
        email,
        subject,
        name
      )

      res.status(201).json(savedCustomer)
    } catch (error) {
      res.status(400).json({
        message: 'Unable to create a customer'
      })
    }
  }
})

export default customersController()
