const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myExercise')
    .then(() => console.log("Conneted to myExercise database successfully"))


const exerciseScchma = new mongoose.Schema({
    tags: [String],
    date: { type: Date, default: Date.now() },
    name: String,
    author: String,
    price: Number,
    isPublished: Boolean,
})

const Courses = mongoose.model('subjects', exerciseScchma);

const solution = async function () {
    const courses = await Courses.find({ tags: "backend", isPublished: true })
        .select({ name: 1, author: 1 })
        .sort({ name: 1 })
     
    console.log(courses);
}

solution();