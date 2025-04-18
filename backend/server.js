import express from 'express'
import cors from 'cors'
import  'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

// App config
const app = express();
const PORT = process.env.PORT || 4000

// middlewares
app.use(express.json())
app.use(cors())

// connect to the database
connectDB()
// connect to the cloudinary
connectCloudinary()

// api end point
app.get('/', (req, res) => {
    res.send("Hello from backend")
})

app.listen(PORT, (req, res) => {
    console.log(`Server started on PORT: http://localhost:${PORT}`)
})