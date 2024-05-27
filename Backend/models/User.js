const mongoose =require("mongoose");

// import mongoose from "mongoose";
const { Schema } = mongoose;

const Userschema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true
  },
  Date: {
    type: Date,
    default: Date.now
  },
});
const User =  mongoose.model("user" , Userschema);
// User.createIndexes();
module.exports = User