const express = require("express");
const router = express();
const userController = require("../Controllers/userController");

router.post("/signup", userController.signup);

router.get("/user/:id", userController.getUserById);


router.post("/login", userController.login);





module.exports = router;
