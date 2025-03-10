import mongoose, { Schema } from "mongoose";

interface IEnrollement extends mongoose.Document {
    student: mongoose.Types.ObjectId;
    course: mongoose.Types.ObjectId;
    enrolledAt: Date
}

const enrollementSchema = new Schema<IEnrollement>({
    student: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    enrolledAt: {
        type: Date,
        default: Date.now
    }
});

const Enrollement = mongoose.models.Enrollement || mongoose.model("Enrollement", enrollementSchema);
export default Enrollement;