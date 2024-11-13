const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require("../controller/taskControllerr");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/create', authMiddleware, createTask);
router.get('/', authMiddleware, getTasks);
router.put('/update/:id', authMiddleware, updateTask);
router.delete('/delete/:id', authMiddleware, deleteTask);

module.exports = router;
