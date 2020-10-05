import express from 'express';
import productsData from './productsData';
const app = require('express')();

app.get("/api/products", (req, res) => {
    res.send(productsData.products);
});

app.listen(5000, () => {console.log("Server started at http://localhost:5000")})

