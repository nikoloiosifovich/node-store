import { Router } from 'express'

const appRoutes = Router()

appRoutes.get('/', (req, res) => {
  return res.send({
    title: 'Node Store API',
    version: '0.0.1'
  })
})

export { appRoutes }
