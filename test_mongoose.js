const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mycourses')
    .then(() => console.log('Connction to MongoDB was successsful...'))
    .catch(() => console.error('Error occured, could not connect to MongoDB'))

