const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Route để tạo một đánh giá mới
router.post('/', reviewController.createReview);

// Route để lấy tất cả đánh giá
router.get('/', reviewController.getAllReviews);

router.get('/:id', reviewController.getReviewById);
// Route để lấy một đánh giá theo ID

// Route để cập nhật một đánh giá theo ID
router.put('/:id', reviewController.updateReviewById);

// Route để xóa một đánh giá theo ID
router.delete('/:id', reviewController.deleteReviewById);

router.get("/product/:id", reviewController.getReviewByProduct)
module.exports = router;
