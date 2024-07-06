import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'
import connectToDb from './db/connectToDb.js';
import cors from 'cors';
const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use(cors({
    origin:"http://localhost:5173",
    methods:"get,POST,PUT,DELETE",
    credentials:true
}));


app.use(authRoutes);
app.get('/',(req,res)=>{
    res.send("Hello User")
})

app.listen(PORT,()=>{
    connectToDb();
    console.log(`Server running at Port ${PORT}`);
})