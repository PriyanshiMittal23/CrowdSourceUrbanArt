import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    src:{
        type:String,
        default:""
    },
    name:{
        type:String,
        trim:true
    },
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    comment:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment",
            
        }
    ],
    likes:{
        type:Number
    }

},{timestamps:true})

const Image = mongoose.model("Image",imageSchema);
export default Image;