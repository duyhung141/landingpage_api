const Product = require('../models/productModel');

// Controller để tạo một sản phẩm mới
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, category, percentSale } = req.body;
    const newProduct = new Product({ name, price, description, category, percentSale });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller để lấy tất cả sản phẩm
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error getting all products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller để lấy một sản phẩm theo ID
exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error getting product by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller để cập nhật một sản phẩm theo ID
exports.updateProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, price, description, category, percentSale } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, price, description, category },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller để xóa một sản phẩm theo ID
exports.deleteProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting product by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
