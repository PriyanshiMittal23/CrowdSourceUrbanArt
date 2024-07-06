import express from 'express';
import { loginUser, logoutUser, registerUser, resendOTPcode, verifyOTPController } from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/login',loginUser);
router.post('/register',registerUser);
router.post('/logout',logoutUser);
router.post('/:id/verifyOTP',verifyOTPController);
router.post('/:id/resendOTP',resendOTPcode);

export default router;