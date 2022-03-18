const  mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true}

});

const inquireSchema = new Schema({
    name: { type: String, required: true},
    course_id: { type: String, required: true},
    details: { type: String, required: true},

});


const CourseModel = mongoose.model('CourseModel', courseSchema)
const InquireModel = mongoose.model('InquireModel', inquireSchema)


module.exports = {CourseModel, InquireModel};