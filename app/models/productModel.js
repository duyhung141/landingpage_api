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
  percentSale:{
    type: Number,
  },
  category: {
    type: String,
    required: true
  },
  urlList:[]
});

productSchema.pre('save', function(next) {
  if (this.price && this.priceSale) {
    this.percentSale = parseInt(((this.price - this.priceSale) / this.price) * 100);
  }
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
