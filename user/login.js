const express = require("express");
const app = express();
const cors = require("cors");
const UserModel = require("./models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb+srv://Hieu1412:Hieu1412@figure-web.gb0coeu.mongodb.net/test"
  );

app.post("/api/login", async (req, res) => {
    const { name, password } = req.body;
  
    const check = await UserModel.findOne({
      name: req.body.name,
    });
    console.log(check);
     
  let result = await bcrypt.compare(password, check.password);
  console.log("object ", check);
  console.log("password", password);
  bcrypt.compare(password, check.password, function (err, result) {
    
    if (result) {
      
      res.json({ status: "ok", message: "Log in Succesfull !" });
      console.log("true");
    } else {
      res.json({ status: "Wrong Name or Password" });
      console.log("wrong");
    }
  });
  
});