import express  from "express";
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import cookieParser from "cookie-parser";
// import cors from "cors"

const app = express();

dotenv.config();

//db connection
app.listen(process.env.PORT, () => {
    console.log("Connected to the Backend...")
    // connect()
});