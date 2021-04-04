import mongoose from 'mongoose'
import 'dotenv/config.js'

(async () => {
  try {
    const mongooseOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
      // user: `${process.env.MONGO_USER}`,
      // pass: `${process.env.MONGO_PASSWORD}`
    }

    const nodeStoreDb = await mongoose.connect(
      `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`,
      mongooseOptions
    )

    console.log(`[${nodeStoreDb.connection.name}] Connected`)
  } catch (error) {
    console.error(error)
  }
})()
