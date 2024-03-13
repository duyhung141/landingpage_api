const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route để tạo một sản phẩm mới
router.post('/products', productController.createProduct);

// Route để lấy tất cả sản phẩm
router.get('/products', productController.getAllProducts);

// Route để lấy một sản phẩm theo ID
router.get('/products/:id', productController.getProductById);

// Route để cập nhật một sản phẩm theo ID
router.put('/products/:id', productController.updateProductById);

// Route để xóa một sản phẩm theo ID
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;
