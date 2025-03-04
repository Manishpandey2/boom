import mongoose from "mongoose";

const MONGODB_CS = process.env.MONGODB_CS as string;

if(!MONGODB_CS){
    throw new Error("MONGODB_CS is not defined");
}

const Connect = async () =>{
    if(mongoose.connection.readyState === 1){
        return console.log("Already connected to MongoDB");
    }
    try{
        await mongoose.connect(MONGODB_CS);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Error connecting to MongoDB", error);
    }
}

export default Connect;