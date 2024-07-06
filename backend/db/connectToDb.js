import mongoose from "mongoose";

const connectToDb = async()=>{
    try {

        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Database connected");
        
    } catch (error) {
        console.log("error connecting to Database",error);
    }
}

export default connectToDb;