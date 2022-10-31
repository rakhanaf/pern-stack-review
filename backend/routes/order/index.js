const route = require("express").Router();

route.get("/", (req, res) => {
  res.status(200).json({
    message: "Order route",
  });
});

route.get("/details", (req, res) => {
  res.status(200).json({
    message: "Order details route",
  });
});

module.exports = route;
