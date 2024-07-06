import User from "../models/User.js";
import bcryptjs from 'bcryptjs';
import generateTokenAndSetCookie from "../utils/generateToken.js";
import transporter from "../utils/mailer.js";
import UserOTPVerification from "../models/UserOTPVerification.js";

export const registerUser = async(req,res)=>{
    try {

        const {username, email, password, confirmPassword, Type} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords do not match"});
        }
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error:"Username already exists"});
        }

        const dupEmail = await User.findOne({email});
        if(dupEmail){
            return res.status(400).json({error:"This Email is already registered"});
        }

        // HASH PASSWORD
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password,salt);

        const profilePic = `https://avatar.iran.liara.run/username?username=${username}+`;
        const verified=false;
        const newUser = new User({username, email, password:hashPassword, Type, profilePic,verified});
        if(newUser){
            await generateTokenAndSetCookie(newUser._id,res);
            await newUser.save().then((result)=>{sendOTPVerificationEmail(result,res)});
            res.status(200).json({id:newUser._id, username:newUser.username, email:newUser.email, profilePic:newUser.profilePic});
            
        }else{
            res.status(400).json({error:"Inavalid user data"});
        }

    } catch (error) {
        console.log("Error in Register Controller",error.message);
        res.status(400).json({error:"Internal server error"});
    }
}

export const loginUser = async(req,res)=>{
    try {

        const {username, password} = req.body;
        const user =await User.findOne({username});
        const isPassCorrect = await bcryptjs.compare(password, user?.password||"");

        if(!user || !isPassCorrect){
            return res.status(400).json({error:"Incorrect username or password"});
        }

        generateTokenAndSetCookie(user._id,res);
        res.status(200).json({
            username:user.username,
            id:user._id,
            profilePic:user.profilePic
        })

    } catch (error) {
        console.log("Error in Login Controller",error.message);
        res.status(400).json({error:"Internal server error"});
    }
}

export const logoutUser = (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        console.log("Error in Login Controller",error.message);
        res.status(400).json({error:"Internal server error"});
    }
}

const sendOTPVerificationEmail = async({_id,email},res)=>{
    try {
        const otp = `${Math.floor(100000+Math.random()*900000)}`;
        const mailOptions = {
            from:process.env.USER_EMAIL,
            to:email,
            subject:"Verification Email",
            html:`<p>Enter <b>${otp}</b> to verify your Email account</p><p>This code will expire in 3 minutes</p>`
        }

        // hash otp
        const salt = await bcryptjs.genSalt(10);
        const hashotp = await bcryptjs.hash(otp,salt);
        const newOTPVer = await new UserOTPVerification({
            userId:_id,
            otp:hashotp,
            createdAt:Date.now(),
            expiresAt:Date.now()+180000
        });
        await newOTPVer.save();
        await transporter.sendMail(mailOptions);
        // res.json({
        //     status:"PENDING",
        //     message:"Verification OTP sent",
        //     data:{
        //         userId:_id,
        //         email
        //     }
        // })

    } catch (error) {
        console.log("Error in OTP Controller",error.message);
        res.status(400).json({error:"Internal server error"});
    }
}

export const verifyOTPController = async(req,res)=>{
    try {
        let userId = req.params.id;
        let {otp} = req.body;
        if(!userId || !otp){
            res.status(400).json({error:"Enter all the feilds"});
            return;
        }else{
            const verify = await UserOTPVerification.findOne({
                userId
            })
            if(!verify){
                res.status(400).json({error:"Account record does not exist or has been verified already, please sign up or log in"});
                return;
            }else{
                const {expiresAt} = verify;
                const hashedOTP = verify.otp;

                if(expiresAt < Date.now()){
                    await UserOTPVerification.deleteMany({userId});
                    return res.status(400).json({error:"OTP expired. Request again"});
                }
                else{
                    const validOTP = bcryptjs.compare(otp,hashedOTP);
                    if(!validOTP){
                        return res.status(400).json({error:"Invalid OTP"});
                    }
                    else{
                        await User.updateOne({_id:userId},{verified:true});
                        await UserOTPVerification.deleteMany({userId});
                        res.status(200).json({message:"User Email verified successfully"});
                    }
                }
            }
        }
    } catch (error) {
        console.log("Error in verifying OTP");
        res.status(400).json({error:error.message});
    }
}

export const resendOTPcode = async(req,res)=>{
    try {
        let userId = req.params.id;
        let email = User.findById({userId});
        await UserOTPVerification.deleteMany({userId});
        sendOTPVerificationEmail({_id:userId,email});
        res.status(200).json({message:"OTP resent successfully"})
        
    } catch (error) {
        console.log("Error in resending OTP", error.message);
        res.status(400).json({error:"Internal server error"});
    }
}