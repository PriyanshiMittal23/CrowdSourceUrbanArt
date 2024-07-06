import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000, //in ms
        httpOnly:true, // to prevent cross site access attacks (XSS attacks)
        sameSite:"strict", // to prevent CSRF attacks
        secure:process.env.MODE_ENV!=="development"
    })
}

export default generateTokenAndSetCookie;