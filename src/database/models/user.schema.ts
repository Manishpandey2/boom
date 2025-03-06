import mongoose, { Document} from "mongoose";

const Schema = mongoose.Schema;

export enum Role {
    Student = "student",
    Admin = "admin"
}
interface IUser extends mongoose.Document{
    username : string,
    email : string,
    profilePic : string,
    role : Role
}
const userSchema = new Schema<IUser>({
    username : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    profilePic : {
        type: String,
        required: true
    },
    
    role : {
        type: String,
        enum: [Role.Admin, Role.Student],
        default: Role.Student
    },
    
    
})

const User =mongoose.models.User || mongoose.model("User", userSchema);

export default User