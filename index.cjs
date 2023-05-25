const express = require('express');
const app = express();
app.use(express.json());


const courses = [
    { "id": 1, "course_name": 'Software Dev' },
    { "id": 2, "course_name": 'Mathematics' },
    {"id": 3, "course_name": 'English Language'}
]
const port = process.env.PORT || 3000



app.get('/', (req, res) => {
    res.send('Hello buddy!')
})

app.get('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) res.status(404).send(`Course with the given ID ${req.params.id} not found`);
    res.send(course)
})

// Post course to 'api/courses/' end_point
app.post('/api/courses/', (req, res) => {
    if (!req.body.course_name || req.body.course_name.length < 3) {
        res.status(400).send('Enter the course or the minimum character allowed is 3')
        return;
    }
    let course = {
        id: courses.length + 1,
        course_name: req.body.course_name,
    }
    courses.push(course);
    res.send(course).status(201)
})

// Get all courses
app.get('api/all/courses', (req, res) => {
    res.send(courses)
})
app.listen(port, () => console.log(`Listening on port ${port}`))