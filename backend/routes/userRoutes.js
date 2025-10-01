const express = require("express");
const router = express.Router();  authController = require("../controllers/auth"); 
router.post("/register", authController.register);
router.post("/login", authController.login);
module.exports = router;