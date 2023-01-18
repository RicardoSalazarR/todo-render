const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  postUser,
  putUser,
  deleteUser,
  getUserWithTasks,
} = require("../controllers/users.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/users", authMiddleware, getAllUsers);
router.get("/users/:id", authMiddleware, getUserById);

//Obtener a un usuario con sus tareas
router.get("/users/:id/todos", authMiddleware, getUserWithTasks);

router.post("/users", postUser);
router.put("/users/:id", authMiddleware, putUser);
router.delete("/users/:id", authMiddleware, deleteUser);

module.exports = router;
