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

app.post("/api/register", async (req, res) => {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    console.log(req.body);
    try {
      const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: newPassword,
        roleID: "user",
      });
      user.save(function (err, cat) {
        if (err) {
          console.log(err);
        } else {
          console.log("we had done it!");
          console.log(cat);
        }
      });
      console.log("create success");
      res.json({ status: "200", message: "ok" });
    } catch (err) {
      console.log(err);
      res.json({ status: "Duplicate email" });
    }
  });