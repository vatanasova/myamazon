import express from 'express';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';
import bodyParser from 'body-parser';
const app = require('express')();

dotenv.config();

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch((error) => console.log(error.reason));

app.use(bodyParser.json());

app.use('/api/users', userRoute);

app.use('/api/products', productRoute);

app.listen(5000, () => {console.log("Server started at http://localhost:5000")})

