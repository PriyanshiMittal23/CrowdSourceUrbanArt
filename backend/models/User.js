import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    Type:{
        type:String,
        required:true,
        enum:["Artist","Viewer"]
    },
    profilePic:{
        type:String,
        default:""
    },
    verified:Boolean,
    images:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Image",
            default:[]
        }
    ],
    like:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Image",
            default:[]
        }
    ],
    share:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Image",
            default:[]
        }
    ],
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment",
            default:[]
        }
    ]
},{timestamps:true})

const User = mongoose.model("User",userSchema);
export default User;