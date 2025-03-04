import mongoose from "mongoose";

const MONGODB_CS = process.env.MONGODB_CS as string;

if(!MONGODB_CS){
    console.log("MONGODB_CS is not defined");
}

const Connect = async () =>{
    try{
        await mongoose.connect(MONGODB_CS);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Error connecting to MongoDB", error);
    }
}

export default Connect;