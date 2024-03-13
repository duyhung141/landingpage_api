const mongoose = require('mongoose');

// Định nghĩa schema cho model Order
const orderSchema = new mongoose.Schema({
  customer: {
    type: String,
    // ref: 'User', // Tham chiếu đến model User
    // required: true
  },
  products: [{
    type: String
    // ref: 'Product' // Tham chiếu đến model Product
  }],
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Tạo model Order từ schema đã định nghĩa
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
