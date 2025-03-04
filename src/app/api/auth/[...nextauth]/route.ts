import Connect from "@/database/connection";
import User from "@/database/models/user.schema";
import { profile } from "console";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn(user) : Promise<boolean> {
            try {
                await Connect();
                const existingUser = await User.findOne({email : user.email})
                if(!existingUser){
                    await User.create({
                        username: user.profile?.name,
                        email: user.profile?.email,
                        profilePic: user.profile?.image,
                    })
                }
                return true;
            } catch (error: any) {
                console.log("Error in sign in callback", error);
                console.log("Error details", error.message, error.stack);
                return false;
            }
        }
    }
})

export { handler as GET, handler as POST };