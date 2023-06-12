const getAllTodos = (req, res, next) => {
  res.json({ message: "GET all todos" });
};

const newTodo = (req, res, next) => {
  res.json({ message: "POST new todo" }); // dummy function for now
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
