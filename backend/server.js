import express from 'express'
import cors from 'cors'
import  'dotenv/config'

// App config
const app = express();
const PORT = process.env.PORT || 4000

// middlewares
app.use(express.json())
app.use(cors())

// api end point
app.get('/', (req, res) => {
    res.send("Hello from backend")
})

app.listen(PORT, (req, res) => {
    console.log(`Server started on PORT: http://localhost:${PORT}`)
})