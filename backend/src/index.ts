import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoutes from "./routes/user.routes"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//routes
app.use("/api/user", userRoutes);

app.get('/', (req, res) => {
    res.json({ message: "hello hashX" })
})


//database connection and server running
mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error("MongoDB connection error:", err));

