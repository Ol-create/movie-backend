const express = require('express');
const app = express();



const courses = [
    { id: 1, course_name: 'Software Dev' },
    { id: 2, course_name: 'Mathematics' },
    {id: 3, course_name: 'English Language'}
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

app.listen(port, () => console.log(`Listening on port ${port}`))