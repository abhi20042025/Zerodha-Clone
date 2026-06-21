require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoute = require("./routes/authRoute");
const dataRoute = require("./routes/dataRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const isProduction = process.env.NODE_ENV === "production";

const app = express();

app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(bodyParser.json());

app.use(session({
  secret: process.env.SESSION_SECRET || "zerodha-secret-key-2024",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: isProduction,
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 24 * 60 * 60 * 1000,
  },
}));

app.use("/auth", authRoute);
app.use("/api", dataRoute);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).json({ success: true, message: "Order Saved Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Order Save Failed" });
  }
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });
