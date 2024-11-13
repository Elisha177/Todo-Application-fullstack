const express = require('express');
const { getUserProfile, updateUserProfile, deleteUserProfile } = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile/update', authMiddleware, updateUserProfile);
router.delete('/profile/delete', authMiddleware, deleteUserProfile);

module.exports = router;
