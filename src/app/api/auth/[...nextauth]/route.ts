import Connect from "@/database/connection";
import User from "@/database/models/user.schema";
import { AuthOptions } from "next-auth";
import { Session } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const outhOptions:AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({user}: {user: {name: string; email: string; image: string }}) : Promise<boolean> {
            try {
                await Connect();
                const existingUser = await User.findOne({email : user.email})
                if(!existingUser){
                    await User.create({
                        username: user.name,
                        email: user.email,
                        profilePic: user.image,
                    })
                }
                return true;
            } catch (error: any) {
                console.log("Error in sign in callback", error);
                console.log("Error details", error.message, error.stack);
                return false;
            }
        },
        async session({session,user}:{session: Session, user: any}){ {
           const userData = await User.findById(user.id);
           session.user.role = userData.role || "student";
           return session;
        }
    }
}
}

const handler = NextAuth(outhOptions);

export { handler as GET, handler as POST };