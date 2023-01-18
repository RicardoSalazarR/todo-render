const { Router } = require("express");
const {
  getAllTodos,
  getTodoById,
  getTodosWithCat,
  postTodo,
  putTodo,
  deleteTodo,
} = require("../controllers/todos.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/todos", authMiddleware, getAllTodos);
router.get("/todos/:id", authMiddleware, getTodoById);
router.get("/todos/:id/categories", authMiddleware, getTodosWithCat);
router.post("/todos", authMiddleware, postTodo);
router.put("/todos/:id", authMiddleware, putTodo);
router.delete("/todos/:id", authMiddleware, deleteTodo);

module.exports = router;
