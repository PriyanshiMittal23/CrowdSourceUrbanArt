import mongoose from 'mongoose';

const userOTPVerificationSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    otp:String,
    createdAt:Date,
    expiresAt:Date
},{timestamps:true})

const UserOTPVerification = mongoose.model("UserOTPVerification",userOTPVerificationSchema);
export default UserOTPVerification;