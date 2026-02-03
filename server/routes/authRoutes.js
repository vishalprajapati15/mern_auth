import express from 'express';
import { login, logout, register } from '../controllers/authController.js';

const authRouter = express.Router();


authRouter.post('/register', register);         //'/api/auth/register'
authRouter.post('/login', login);               //'/api/auth/login'
authRouter.post('/logout', logout);               //'/api/auth/logout'

export default authRouter;