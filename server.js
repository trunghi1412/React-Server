const express = require("express");
const app = express();
const cors = require("cors");
const UserModel = require("./models/user.model");
const ProductModel = require("./models/product.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Hieu1412:Hieu1412@figure-web.gb0coeu.mongodb.net/test"
);

//import products page 1/cart
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
app.get("/api/getproduct", async (req, res) => {
  try {
    const data = await ProductModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//Register user
app.post("/api/register", async (req, res) => {
  const newPassword = await bcrypt.hash(req.body.password, 10);
  console.log(req.body);
  try {
    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
      roleID: 'user'
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

//Login user
app.post("/api/login", async (req, res) => {
  const { name, password } = req.body;

  const check = await UserModel.findOne({
    name: req.body.name,
  });
  console.log (check)

  // let result = true;
  let result = await bcrypt.compare(password, check.password);
  console.log("object ", check);
  console.log('password',password )
  bcrypt.compare(password, check.password, function (err, result) {
    // result == true
    if (result) {
      res.json({ status: "ok", message: "Log in Succesfull !" });
      console.log("true");
    } else {
      res.json({ status: "Wrong Name or Password" });
      console.log("wrong");
    }
  });
  // let jj = bcrypt.compareSync(password, check.password); // true
  // console.log (jj)
});
app.get("/api/getuser", async (req, res) => {
  try {
    const data = await UserModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

////////

app.listen("2000", () => console.log("Server started at port 2000"));
