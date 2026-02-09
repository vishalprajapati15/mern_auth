import express from 'express';
import { isAuthenticated, login, logout, register, resetPassword, sendResetOtp, sendverifyOtp, verifyEmail } from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();


authRouter.post('/register', register);         //'/api/auth/register'
authRouter.post('/login', login);               //'/api/auth/login'
authRouter.post('/logout', logout);               //'/api/auth/logout'
authRouter.post('/send-verify-otp', userAuth, sendverifyOtp);               //'/api/auth/send-verify-otp'
authRouter.post('/verify-account', userAuth, verifyEmail);               //'/api/auth/verify-account'
authRouter.get('/is-auth', userAuth, isAuthenticated);               //'/api/auth/verify-account'
authRouter.post('/send-reset-otp', sendResetOtp);               //'/api/auth/verify-account'
authRouter.post('/reset-password', resetPassword);               //'/api/auth/verify-account'


export default authRouter;