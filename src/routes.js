import { Router } from 'express'

const appRoutes = Router()

appRoutes.get('/', (req, res) => {
  return res.send({
    title: 'Node Store API',
    version: '0.0.1'
  })
})

appRoutes.post('/', (req, res) => {
  const { id, title } = req.body

  return res.status(201).json({
    id,
    title
  })
})

appRoutes.put('/:id', (req, res) => {
  const { id } = req.params
  const { title } = req.body

  return res.json({
    id,
    title
  })
})

appRoutes.delete('/:id', (req, res) => {
  return res.json({
    message: 'Deleted!'
  })
})

export { appRoutes }
