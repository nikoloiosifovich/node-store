import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import { config } from 'dotenv'
config()

const app = express()

app.use(json())
app.use(urlencoded({ extended: false }))
app.use(morgan('dev'))

app.set('port', process.env.PORT || 3333)

app.get('/', (req, res) => {
  return res.send({
    title: 'Node Store API',
    version: '0.0.1'
  })
})

app.listen(app.get('port'), () => {
  console.log('Server running:', app.get('port'))
})

export { app }
