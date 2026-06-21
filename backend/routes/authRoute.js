const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { UserModel } = require("../model/UserModel");

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();

    req.session.userId = newUser._id;
    req.session.userName = newUser.name;

    res.status(201).json({ message: "Signup successful", user: { name: newUser.name, email: newUser.email } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    req.session.userId = user._id;
    req.session.userName = user.name;

    res.status(200).json({ message: "Login successful", user: { name: user.name, email: user.email } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/user", (req, res) => {
  if (req.session.userId) {
    res.status(200).json({ loggedIn: true, name: req.session.userName });
  } else {
    res.status(401).json({ loggedIn: false });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Logged out successfully" });
  });
});

module.exports = router;
