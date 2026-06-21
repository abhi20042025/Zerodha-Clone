const express = require("express");
const router = express.Router();
const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { OrdersModel } = require("../model/OrdersModel");

const requireAuth = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

router.get("/holdings", requireAuth, async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch holdings" });
  }
});

router.get("/positions", requireAuth, async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch positions" });
  }
});

router.get("/orders", requireAuth, async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

router.post("/orders", requireAuth, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).json({ success: true, message: "Order placed successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Order failed" });
  }
});

module.exports = router;
