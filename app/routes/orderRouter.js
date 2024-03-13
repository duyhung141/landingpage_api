const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route để tạo một đơn hàng mới
router.post('/orders', orderController.createOrder);

// Route để lấy tất cả đơn hàng
router.get('/orders', orderController.getAllOrders);

// Route để lấy một đơn hàng theo ID
router.get('/orders/:id', orderController.getOrderById);

// Route để cập nhật trạng thái của một đơn hàng theo ID
router.put('/orders/:id/status', orderController.updateOrderStatusById);

// Route để xóa một đơn hàng theo ID
router.delete('/orders/:id', orderController.deleteOrderById);

module.exports = router;
