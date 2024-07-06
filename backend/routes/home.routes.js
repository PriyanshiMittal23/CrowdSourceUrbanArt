import express from 'express';
import { allImages, newImage } from '../controllers/image.controller.js';
const router = express.Router();

router.post('/',allImages);

router.post('/new',newImage);


export default router;