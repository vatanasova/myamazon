import express from 'express';
import productsData from './productsData';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
const app = require('express')();

dotenv.config();

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch((error) => console.log(error.reason));

app.use('/api/users', userRoute);

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = productsData.products.find(x => x._id === productId);
    if (product) 
        res.send(product);
    else
        res.status(404).send({ msg: "Product Not Found." });
});

app.get("/api/products", (req, res) => {
    res.send(productsData.products);
});

app.listen(5000, () => {console.log("Server started at http://localhost:5000")})

