import express, { json, urlencoded } from 'express'
import { errors } from 'celebrate'
import morgan from 'morgan'
import 'dotenv/config.js'

import { appRoutes } from './routes.js'

const app = express()

app.use(json())
app.use(urlencoded({ extended: false }))
app.use(morgan('dev'))

app.set('port', process.env.PORT || 3333)

app.use('/products', appRoutes)

app.use(errors())

export { app }
