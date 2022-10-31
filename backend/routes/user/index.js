const route = require("express").Router();

route.get("/", (req, res) => {
  res.status(200).json({
    message: "User route",
  });
});

route.get("/details", (req, res) => {
  res.status(200).json({
    message: "User details route",
  });
});

module.exports = route;
