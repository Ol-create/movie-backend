const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myExercise', () => console.log("Conneted to myExercise database successfully"))

const exerciseScchma = mongoose.Schema({
    tags: [String],
    date: { type: Date, default: Date.now() },
    name: String,
    author: String,
    price: Number,
    isPublish: Boolean,
})