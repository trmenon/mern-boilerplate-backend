const express = require('express');
const router = express.Router();
const { userController } = require('../../controller');

// Create New User
router.post("/signup", userController.createUser);

// User Signin
router.post("/signin", userController.signin);

// User Signout
router.get("/signout", userController.signout);

module.exports = router;