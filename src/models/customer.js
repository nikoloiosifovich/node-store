import mongoose from 'mongoose'
const { Schema, model } = mongoose

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
)

export default model('Customer', productSchema)
