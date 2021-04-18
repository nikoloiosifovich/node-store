import mongoose from 'mongoose'
const { Schema, model } = mongoose

const productSchema = new Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    },
    number: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      required: true,
      enum: ['created', 'done'],
      default: 'created'
    },
    items: [{
      quantidade: {
        type: Number,
        required: true,
        default: 1
      },
      price: {
        type: Number,
        required: true
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
    }]
  },
  {
    timestamps: true
  }
)

export default model('Order', productSchema)
