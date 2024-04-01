const mongoose = require('mongoose');

// Định nghĩa schema cho model Product
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  priceSale:{
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  urlList:[]
});

// Tạo model Product từ schema đã định nghĩa
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
