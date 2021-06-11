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

//Desc:Register User Api Route
//Method Post
//Access Public
//Url:/api/user/register
router.post(
  "/register",
  [
    check("username")
      .not()
      .isEmpty()
      .withMessage("Please enter your username")
      .trim()
      .escape(),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Please enter your password")
      .trim()
      .escape(),
    check("password1")
      .not()
      .isEmpty()
      .withMessage("Please enter your re-type password")
      .trim()
      .escape(),
    check("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Please enter valid email")
      .trim()
      .escape(),
  ],
  (req, res) => {
    //check validation error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let error = {};
      for (index = 0; index < errors.array().length; index++) {
        error = {
          ...error,
          [errors.array()[index].param]: errors.array()[index].msg,
        };
      }
      return res.status(400).json({
        status: false,
        message: "form validation error",
        error: error,
      });
    }
    //check password = password
    if (req.body.password != req.body.password1) {
      return res.status(400).json({
        status: false,
        message: "form validation error",
        error: {
          password1: "Re-type password is same as password",
        },
      });
    }
    // check if email already exist
    User.findOne({ email: req.body.email })
      .then((user) => {
        // if user email exists
        if (user) {
          return res.status(400).json({
            status: false,
            message: "User already exists.",
            error: {
              email: "Email already exists.",
            },
          });
        } else {
          // password hashing
          let salt = bcrypt.genSaltSync(10);
          let hashedPassword = bcrypt.hashSync(req.body.password, salt);

          // Save new user into database
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
          });

          newUser
            .save()
            .then((user) => {
              return res.status(200).json({
                status: true,
                message: "User register success.",
                user: {
                  id: user._id,
                  username: user.username,
                  email: user.email,
                },
              });
            })
            .catch((error) => {
              return res.status(502).json({
                status: false,
                message: "Database error.",
                error: {
                  db_error: "Some error in database.",
                },
              });
            });
        }
      })
      .catch((error) => {
        return res.status(502).json({
          status: false,
          message: "Database error.",
          error: {
            db_error: "Some error in database.",
          },
        });
      });
  }
);
module.exports = router;
