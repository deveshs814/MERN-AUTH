import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './Routes/user.routes.js';
import authRoutes from './Routes/auth.routes.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to the Mongo DB');
}).catch((err) => {
    console.log(err);
});


const app = express();

app.use(express.json());

app.listen(3000,() =>{
    console.log("Server is listening to the port 3000")
});

app.use('/api/user' , userRoutes);
app.use('/api/auth',authRoutes);

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internet Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});