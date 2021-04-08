import mongoose from 'mongoose'
import 'dotenv/config.js'

(async () => {
  try {
    const mongooseOptions = {
      // user: `${process.env.MONGO_USER}`,
      // pass: `${process.env.MONGO_PASSWORD}`,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
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
