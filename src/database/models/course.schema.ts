import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    coursename : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now
    },
    updatedAt : {
        type: Date,
        default: Date.now
    }
})

const Course =mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;