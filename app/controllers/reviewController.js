const Review = require('../models/reviewModel');

// Controller để tạo một đánh giá mới
exports.createReview = async (req, res) => {
  try {
    const { user, product, rating, comment, thumbnail } = req.body;
    const newReview = new Review({ user, product, rating, comment, thumbnail });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller để lấy tất cả đánh giá
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error getting all reviews:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller để lấy một đánh giá theo ID
exports.getReviewById = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (error) {
    console.error('Error getting review by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller để cập nhật một đánh giá theo ID
exports.updateReviewById = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const { rating, comment } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { rating, comment },
      { new: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(updatedReview);
  } catch (error) {
    console.error('Error updating review by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller để xóa một đánh giá theo ID
exports.deleteReviewById = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const deletedReview = await Review.findByIdAndDelete(reviewId);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting review by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
