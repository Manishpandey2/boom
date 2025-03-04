import Connect from "@/database/connection";
import Course from "@/database/models/course.schema";
import User from "@/database/models/user.schema";


export async function GET() {
    await Connect();
    User.create({username: "Manish", email: "manish", password: "manish", role: "admin"});
    Course.create({coursename: "CS", description: "Computer Science"});
    return Response.json(
        {
            message: "Hello Manish"
        }
    );
}
