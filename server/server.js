import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: (origin, callback) => {
            const allowedOrigins = [
                'http://localhost:5173',
                'https://mern-auth-jet-xi.vercel.app',
                'https://mern-auth-fyk9gzdic-vishal-prajapatis-projects-0c602765.vercel.app'
            ];
            
            console.log('Request Origin:', origin);
            
            // Allow requests with no origin (like mobile apps or curl)
            if (!origin) {
                return callback(null, true);
            }
            
            // Allow any vercel.app domain
            if (origin.endsWith('.vercel.app')) {
                return callback(null, true);
            }
            
            if (allowedOrigins.includes(origin)) {
                callback(null, true);
            }
            else{
                console.warn('Blocked by CORS:', origin);
                callback(new Error('Not Allowed by CORS'));
            }
        },
        credentials: true,
    })
);

app.get('/', (req, res) => res.send('API is running...'));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.listen(port, () => console.log(`Server is running on port : ${port}`));

