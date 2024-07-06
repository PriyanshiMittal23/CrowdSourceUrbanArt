import Image from "../models/Image.js";

export const allImages = async(req,res)=>{
    try{
        const allImages=await Image.find({})
        res.status(200).json(allImages);
    }catch(error){
        console.log("error in getting all images",error.message)
        res.status(400).json({error:"internal error"})
    }
}

export const newImage = async(req,res)=>{
    try {
        const {name, desc, artist} = req.body;
        const src = `/uploads/${req.file.filename}`;
        const newImage = new Image({
            src,
            name,
            artist,
            desc
        });
        await newImage.save();
        res.status(200).json({
            image:newImage.src,
            name:newImage.name,
            artist:newImage.artist,
            desc:newImage.desc
        })
        
    } catch (error) {
        res.status(400).json({error:error.message});
        
    }

}