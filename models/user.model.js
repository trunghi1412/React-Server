const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: false, unique: true },

    password: { type: String, required: true },

    roleID: { type: String, required: true },
  },
  
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;

