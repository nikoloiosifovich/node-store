import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import { config } from 'dotenv'

import { appRoutes } from './routes.js'
config()

const app = express()

app.use(json())
app.use(urlencoded({ extended: false }))
app.use(morgan('dev'))

app.set('port', process.env.PORT || 3333)

app.use(appRoutes)

export { app }
