const mongoose = require('mongoose');

// Định nghĩa schema cho model Order
const orderSchema = new mongoose.Schema({
  customer: {
    type: String,
  },
  products: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product' 
  },
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
  },
  quantity:{
    type: Number,
    required: true
  },
  phoneCustomer:{
    type: String,
    required: true
  },
  addressCus:{
      type: String,
    required: true
  }
});

// Tạo model Order từ schema đã định nghĩa
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
