import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    image:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Image",
        required:true
    }


},{timestamps:true})

const Comment = mongoose.model("Comment",commentSchema);
export default Comment;