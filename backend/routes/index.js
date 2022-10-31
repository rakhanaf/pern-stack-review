const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "Parent route",
  });
});

const userRoute = require("./user");
routes.use("/users", userRoute);

const orderRoute = require("./order");
routes.use("/orders", orderRoute);

module.exports = routes;
