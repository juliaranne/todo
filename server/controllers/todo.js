const Todo = require("../models/todo");

const getAllTodos = (req, res, next) => {
  res.json({ message: "GET all todos" });
};

const newTodo = (req, res, next) => {
  const todo = new Todo({
    text: req.body.text,
    timestamp: new Date(),
  });

  todo
    .save()
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      return res.json({ Error: err });
    });
};

//PATCH '/todo/:id'
const updateOneTodo = (req, res, next) => {
  res.json({ message: "update 1 todo" });
};

//DELETE '/todo/:id'
const deleteOneTodo = (req, res, next) => {
  res.json({ message: "DELETE 1 todo" });
};

module.exports = { getAllTodos, newTodo, updateOneTodo, deleteOneTodo };
