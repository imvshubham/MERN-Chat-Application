const express = require("express");
const { registerUser, authUser, allUser } = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Route for user registration
router.route("/").post(registerUser).get(protect,allUser);

// Route for user authentication (login)
router.post("/login", authUser);

module.exports = router;
