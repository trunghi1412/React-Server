const express = require("express");
const app = express();
const cors = require("cors");
const ProductModel = require("./models/product.model");
const mongoose = require("mongoose");


app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://group6:12345@cluster1.4qozkas.mongodb.net/test"
);

app.get("/api/getproduct", async (req, res) => {
    ProductModel.find()
      .select("_id name quantity price image")
      // exec query mongo
      .exec()
      .then((docs) => {
        const response = {
          count: docs.length,
          products: docs.map((doc) => {
            return {
              // Gọi để chạy carts
              id: doc.id,
              name: doc.name,
              quantity: doc.quantity,
              price: doc.price,
              image: doc.image,
            };
          }),
        };
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  });