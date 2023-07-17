import express, { json } from 'express'
import dotenv from "dotenv"
dotenv.config()
import connectDB from './config/connectDB.mjs';
import taskRoutes from "./routes/taskRoute.mjs"
import cors from "cors"


const app = express()

//Routes
app.get("/", (req, res) => {
  res.send("Homepage")
})

//Middleware
app.use(express.json()) //middleware express without it we can't get access to req.body
app.use(cors({
  origin: ["http://localhost:3000/", "https://mern-stack-appl.onrender.com"]
}))

app.use("/api/tasks", taskRoutes)

const PORT = process.env.PORT || 5000


const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server is running port ${PORT}`);
    })

  } catch (err) {
    console.log(err);
  }
}

startServer()