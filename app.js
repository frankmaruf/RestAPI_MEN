const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
//Import Routes
const postRoute = require("./routes/posts");
// Middlewares
app.use("/posts", postRoute);

//Connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

// ROUTES

// How to we start listening for server?
app.listen(3000);

//to Get Data from anyware

// fetch("http://localhost:3000/posts")
//   .then((result) => {
//     return result.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
