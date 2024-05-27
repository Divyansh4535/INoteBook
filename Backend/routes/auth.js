const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "imbest";
const fetchuser = require("../middleware/fetchuser");

// ROUTE 1: Create a user using : POST "/api/auth/createuser" . No login requires

router.post(
  "/createuser",
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Enter must be atleast 5 charactors ").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //if theere are errors , return bad request and the error
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    // check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      console.log("User", user);
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const securePass = await bcrypt.hash(req.body.password, salt);
      console.log("securePass", securePass);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePass,
      });
      console.log("password", req.body.password);
      console.log(user);

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, jwtSecret);
      console.log({ authToken });
      // res.json(user);
      res.json({ authToken });
    } catch (error) {
      console.error("error", error.message);
      res.status(500).send("Internal server Error");
    }
  }
);

// ROUTE 2: authenticate a user using : POST "/api/auth/login" . No login requires

router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password can not be blank ").exists(),
  ],
  async (req, res) => {
    //if theere are errors , return bad request and the error
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, jwtSecret);
      res.json({ authToken });
    } catch (error) {
      console.error("error login", error.message);
      res.status(500).send("internal server Error login ");
    }
  }
);

// ROUTE 3: get loggedin  user Detales using : POST "/api/auth/getuser" . No login requires

router.post("/getuser", fetchuser , async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-passord");
    res.send(user)
  } catch (error) {
    console.error("error login", error.message);
    res.status(500).send("internal server Error login ");
  }
});

module.exports = router;
