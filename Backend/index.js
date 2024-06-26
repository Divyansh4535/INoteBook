// import mongoose from "mongoose";
// let a = await mongoose.connect("mongodb://localhost:27017/")

const connectToMongo = require("./db");
var cors = require('cors')

connectToMongo();

const express = require("express");
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())


//Available Routes 
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.get("/", (req, res) => 
  res.send("Hello dk")
);


app.listen(port, () => {
  console.log(`Example app listening on port  https://localhost:${port}`);
});
