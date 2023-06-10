const Joi = require('joi')
const express = require('express');
const app = express();
app.use(express.json());

const schema = Joi.object({
  course_name: Joi.string().min(3).max(30).required(),
});

const courses = [
    { "id": 1, "course_name": 'Software Dev' },
    { "id": 2, "course_name": 'Mathematics' },
    {"id": 3, "course_name": 'English Language'}
]
const port = process.env.PORT || 3000

//love learning, my hobby

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
    // validate
    validateCourse(res, req.body.course_name);
    let course = {
        id: courses.length + 1,
        course_name: req.body.course_name,
    }
    courses.push(course);
    res.send(course).status(201)
})

// Get all courses
app.get('/api/all/courses/', (req, res) => {
    res.send(courses)
})

//Update course
app.put('/api/courses/:id', (req, res) => {
    //check if course is available
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) {
        res.status(404).send('Course not found')
        return;
    }

    //Validate course 
    validateCourse(res, req.body.course_name);
  
    // Update course
    course.course_name = req.body.course_name
    res.send(course)

     
})


const validateCourse = (res, course) => {
    const { error, value } = schema.validate({
      course_name: course,
    });
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
}

//Delete course
app.delete('/api/courses/:id', (req, res) => {
    let course = courses.find((c) => c.id === parseInt(req.params.id));

    if (!course) {
         res
            .status(404)
            .send(`Course with the given ID ${req.params.id} not found`);
         res.send(course);
        return;
    }
    courses.splice(req.params.id, 1)
    res.send(course)
}) 

app.listen(port, () => console.log(`Listening on port ${port}`))
