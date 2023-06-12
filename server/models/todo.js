const mongoose = require("mongoose"); //import mongoose

// tea schema
const TodoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  timestamp: { type: Number, required: true, default: new Date() },
  urgent: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema); //convert to model named Todo
module.exports = Todo; //export for controller use
