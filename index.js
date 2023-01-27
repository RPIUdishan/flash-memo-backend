import express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
// import cookieParser from "cookie-parser";

import cardDecksRoute from "./routes/flashCardDeckRoute.js"

const app = express();

dotenv.config();

//db connection
app.listen(5000, () => {
    console.log("Connected to the Backend...")
    connect()
});

//getting connection on mongo db atlas
const connect = async () => {
    try{
        await mongoose.connect(process.env.DB_CONNECTION_STRING)
        console.log("Connected to the Database...")
    }catch(err){
        throw err;
    }
};

//event listner for db connection
mongoose.connection.on('connected', () => {
    console.log("Connected")
})

//event listner for db disconnection
mongoose.connection.on('disconnected', () => {
    console.log("Disconnected")
})
app.use(cors())
app.use(express.json())

app.use("/api/flashCardsDeck", cardDecksRoute)
