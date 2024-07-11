const express = require("express");
const listUsers = require("./userRoutes/listUsers");
const createUser = require("./userRoutes/createUser");
const getUser = require("./userRoutes/getUser");
const updateUser = require("./userRoutes/updateUser");
const deleteUser = require("./userRoutes/deleteUser");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router
  .get("/users", (req, res) => {
    listUsers(req, res);
  })
  .post("/users", (req, res) => {
    createUser(req, res);
  });
router
  .get("/users/:id", (req, res) => {
    getUser(req, res);
  })
  .put("/users/:id", (req, res) => {
    updateUser(req, res);
  })
  .delete("/users/:id", (req, res) => {
    deleteUser(req, res);
  });

router.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});
module.exports = router;
