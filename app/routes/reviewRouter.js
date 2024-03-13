const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Route để tạo một đánh giá mới
router.post('/reviews', reviewController.createReview);

// Route để lấy tất cả đánh giá
router.get('/reviews', reviewController.getAllReviews);

// Route để lấy một đánh giá theo ID
router.get('/reviews/:id', reviewController.getReviewById);

// Route để cập nhật một đánh giá theo ID
router.put('/reviews/:id', reviewController.updateReviewById);

// Route để xóa một đánh giá theo ID
router.delete('/reviews/:id', reviewController.deleteReviewById);

module.exports = router;
