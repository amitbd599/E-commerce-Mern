const express = require("express");
const router = require("./src/routes/api");
const app = new express();
const multer = require("multer");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotENV = require("dotenv");
dotENV.config();

// let URL =
//   "mongodb+srv://<username>:<password>@cluster0.fsp0qs4.mongodb.net/e-commerce?retryWrites=true&w=majority";
// let option = { user: "admin", pass: "admin@123", autoIndex: true };
mongoose
  .connect("mongodb://localhost:27017/e-commerce")
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cookieParser());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(
  cors({
    credentials: true,
    origin: process.env.Origin_HOST,
  })
);

app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);




router.get('/uploads/:filename', (req, res) => {
  res.sendFile(__dirname + '/uploads/' + req.params.filename);
});

// File Upload
app.use("/uploads", express.static("uploads"));




app.use("/api/v1", router);

// Add React Front End Routing
app.get("*", function (req, res) {
  res.status(200).json("Not Found");
});

module.exports = app;
