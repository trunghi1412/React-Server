const express = require("express");
const app = express();
const cors = require("cors");
const ProductModel = require("./models/product.model");
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://group6:12345@cluster1.4qozkas.mongodb.net/test"
  );

app.post("/api/addproduct", async (req, res) => {
    const dataProduct = new ProductModel({
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      quantity: req.body.quantity,
    });
    try {
      const datatToSave = await dataProduct.save();
      res.status(200).json(datatToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

