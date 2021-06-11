//Import library
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const token_key = process.env.TOKEN_KEY;
const { check, validationResult } = require("express-validator");

//import user model
const User = require("../models/User");

//Middlewares setup
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//default route
//Method Get
//Access Public
//Url:/api/user/
router.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Default User API Route",
  });
});
module.exports = router;
