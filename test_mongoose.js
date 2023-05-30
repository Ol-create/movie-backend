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

const Courses = mongoose.model("Courses", courseSchema);

const courses = new Courses({
  course_name: "Further Mathematics",
  author: "Dr. Oluyemi",
  tags: ["FrontEnd", "BackEnd"],
  isPublish: true,
});