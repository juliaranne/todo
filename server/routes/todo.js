const express = require("express"); //import express

const router = express.Router();
const todoController = require("../controllers/todo");
router.post("/todo", todoController.newTodo);
router.get("/todos", todoController.getAllTodos);
router.patch("/todo", todoController.updateOneTodo);
router.delete("/todo", todoController.deleteOneTodo);

module.exports = router; // export to use in server.js
