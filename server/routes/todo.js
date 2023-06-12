const express = require("express"); //import express

const router = express.Router();
const todoController = require("../controllers/todo");

const multer = require("multer");
const upload = multer();

router.post("/todo", upload.none(), todoController.newTodo);
router.get("/todos", upload.none(), todoController.getAllTodos);
router.patch("/todo", upload.none(), todoController.updateOneTodo);
router.delete("/todo", upload.none(), todoController.deleteOneTodo);

module.exports = router; // export to use in server.js
