const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route để tạo một đơn hàng mới
router.post('/', orderController.createOrder);

// Route để lấy tất cả đơn hàng
router.get('/', orderController.getAllOrders);

// Route để lấy một đơn hàng theo ID
router.get('/:id', orderController.getOrderById);

// Route để cập nhật trạng thái của một đơn hàng theo ID
router.put('/:id/status', orderController.updateOrderStatusById);

// Route để xóa một đơn hàng theo ID
router.delete('/:id', orderController.deleteOrderById);

module.exports = router;
