const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mycourses')
    .then(() => console.log('Connction to MongoDB was successsful...'))
    .catch(() => console.error('Error occured, could not connect to MongoDB'))

const courseSchema = new mongoose.Schema({
    course_name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublish: Boolean,
});