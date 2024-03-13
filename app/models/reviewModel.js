const mongoose = require('mongoose');

// Định nghĩa schema cho model Review
const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Tham chiếu đến model User
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Tham chiếu đến model Product
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Tạo model Review từ schema đã định nghĩa
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
