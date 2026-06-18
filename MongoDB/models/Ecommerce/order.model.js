import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity: {
    type: Number,
    required: true
  } 
})

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["PENDING", "CANCELLED", "DELIVERED"],
    default: "PENDING"
  },
  paymentId: {
    type: String,
  }, 
  orderPrice: {
    type: Number,
    required: true
  },
  orderItems: {
    type: [orderItemSchema],
  }
}, {timestamps: true}
)

export const Order = mongoose.Model("Order", orderSchema)