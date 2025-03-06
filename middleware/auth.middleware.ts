import { outhOptions } from "@/app/api/auth/[...nextauth]/route"
import { Role } from "@/database/models/user.schema";
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";


const authMiddleware = async(req: Request) => {
    const session = await getServerSession(outhOptions)
    if(!session || session.user.role !== Role.Admin) {
        return Response.json({message: "You are not authenticated"}, {status: 401});
    }
    return NextResponse.next();
}

export default authMiddleware