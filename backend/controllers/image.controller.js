export const allImages = async(req,res)=>{
    try{
        const allImages=await Images.find({})
        res.status(200).json(allImages);
    }catch(error){
        console.log("error in getting all images",error.message)
        res.status(400).json({error:"internal error"})
    }
}

export const newImage = async(req,res)=>{
    const src = `/uploads/${req.file.filename}`
}