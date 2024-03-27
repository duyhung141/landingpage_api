const mongoose = require('mongoose');

const categoryModel = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    }
});

const Category = mongoose.model('Category', categoryModel);

module.exports = Category;
