//Include librarys
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT;

//Cross origin Resource Sharing setup
app.use(cors());

//default route
//Method Get
//Access Public
//Url:/
app.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Default API Route",
  });
});

//Start Web Server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
