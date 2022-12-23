import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fileUpload from "express-fileupload";
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./DataImport.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import categoryRouter from "./Routes/CategoryRoutes.js";
import orderRouter from "./Routes/OrderRoutes.js";
import productRouter from "./Routes/ProductRoutes.js";
import uploadRouter from "./Routes/UploadRoutes.js";
import userRouter from "./Routes/UserRoutes.js";
import mongoose from "mongoose";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());
app.use(cors());
app.use(
    fileUpload({
        useTempFiles: true,
    })
);
mongoose.connect((process.env.MONGO_URL), () => {
    console.log("Connected to MongoDB")
})

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
  
  //Xử lý add to cart và làm xuất hiện giỏ hàng
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
  
  //Register user
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
  
  //Login user
  app.post("/api/login", async (req, res) => {
    const { name, password } = req.body;
  
    const check = await UserModel.findOne({
      name: req.body.name,
    });
    console.log(check);
  
    // let result = true;
    let result = await bcrypt.compare(password, check.password);
    console.log("object ", check);
    console.log("password", password);
    bcrypt.compare(password, check.password, function (err, result) {
      // result == true
      if (result) {
        /* Sending a response to the client. */
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
// API
app.use("/api/import", ImportData);
app.use("/api/categories", categoryRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/upload", uploadRouter);
app.get("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID);
});

// ERROR HANDLE
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`Server run in port ${PORT}`));
