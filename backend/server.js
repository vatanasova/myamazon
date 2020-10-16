import express from 'express';
import productsData from './productsData';
const app = require('express')();

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

