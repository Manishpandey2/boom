import mongoose, { Schema } from "mongoose";

enum PaymentStatus {
    Completed = "completed",
    Pending = "pending",
    Failed = "failed"
}
interface IEnrollement extends Document {
    student: mongoose.Types.ObjectId,
    course: mongoose.Types.ObjectId,
    amount: number,
    status: PaymentStatus
}

const enrollementSchema = new Schema({
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
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: [PaymentStatus.Completed, PaymentStatus.Pending, PaymentStatus.Failed],
        default: PaymentStatus.Pending
    }
});

const Enrollement = mongoose.models.Enrollement || mongoose.model("Enrollement", enrollementSchema);
export default Enrollement;