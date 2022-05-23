const express = require('express');
const router = express.Router();
const { requireSignin } = require('../../middleware');
const { themeController }= require('../../controller');

// Getting User Theme
router.get(
    "/userTheme/:userId",
    requireSignin,
    themeController.getUserThemeController
);

//  Update User Theme
router.put(
    "/updateTheme",
    requireSignin,
    themeController.updateUserThemeController
)

module.exports = router;