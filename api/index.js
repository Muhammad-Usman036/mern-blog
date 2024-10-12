// const express = require('express');
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import userAuthRoutes from './routes/auth.route.js';
const app = express();
app.use(express.json()); 
// const mongoose = require('mongoose');
dotenv.config();
// console.log('MongoDB connection string:', process.env.MONGO);

mongoose
  .connect(process.env.MONGO)
  // .connect("mongodb+srv://usman036:usman036@mern-blog.o5t1u.mongodb.net/mydatabase?retryWrites=true&w=majority")
  .then(() => {
    console.log("database is connected");
  }).catch((err)=>console.log(err));


app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});
// routes
app.use('/api/user',userRoutes);
app.use('/api/auth',userAuthRoutes);

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode  || 500;
  const message= err.message || "Internal Server Error"
  res.status(statusCode).json({
    succes:false,
    statusCode,
    message,
  })
})