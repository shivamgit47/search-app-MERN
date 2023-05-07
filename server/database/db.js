import mongoose from "mongoose";

Connection().catch((err)=>{console.log("Error while connecting to database",err)});

async function Connection(){
    const URL = "mongodb://127.0.0.1:27017/search-api";
    await mongoose.connect(URL);
    console.log("Database connected successfully")
}

export default Connection;