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
    price: Number,
});

const Courses = mongoose.model("Courses", courseSchema);

const createCourse = async function () {
    const course = new Courses({
        course_name: "Probability",
        author: "Dr. Olurant",
        tags: "math",
        price: 10,
        isPublish: false,
    });
    const result = await course.save()
    console.log(result)
};

createCourse()

// Get all Courses;

async function getCourses() {
    const result = await Courses.find()
    console.log(result)
}

// getCourses();

// Get a specific course
async function getCourse() {
    const course = await Courses.find({
        course_name: 'React'
    })
    console.log(course)
}

// getCourse();

//More query sample
async function getCourses() {
    const courses = await Courses.find()
        .limit(3)
        .sort({ course_name: 1 })
        .select({course_name: 1, tags: 1})
    
    console.log(courses)
    
}

// getCourses();

