import express from 'express';
import { allImages, newImage } from '../controllers/image.controller.js';
const router = express.Router();
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'backend/public/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname+ '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

router.post('/',allImages);

router.post('/new',upload.single('src'),newImage);


export default router;