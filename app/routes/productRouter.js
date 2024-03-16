const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route để tạo một sản phẩm mới
router.post('/', productController.createProduct);

// Route để lấy tất cả sản phẩm
router.get('/', productController.getAllProducts);

// Route để lấy một sản phẩm theo ID
router.get('/:id', productController.getProductById);

// Route để cập nhật một sản phẩm theo ID
router.put('/:id', productController.updateProductById);

// Route để xóa một sản phẩm theo ID
router.delete('/:id', productController.deleteProductById);

module.exports = router;
