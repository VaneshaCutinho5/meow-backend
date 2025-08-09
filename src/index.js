//require('dotenv').config({path:'./env'}) //for consistency we write the module js form

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()

/* First approach with IIFE
import express from "express";

const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        app.on("error", () => {
            console.log("Error: ", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`Process is listening on port ${process.env.PORT}` );
            
        })

    } catch (error) {
console.error("Error: ", error)
        throw error
    }
})()

*/