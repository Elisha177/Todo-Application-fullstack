const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    userId: {type: Number, required: true},
    title: {type: String, required: true},
    status: {type: String, enum: ['pending','in progress', 'completed', 'done'], default: 'pending'},
})


module.exports = mongoose.model("Task", taskSchema)