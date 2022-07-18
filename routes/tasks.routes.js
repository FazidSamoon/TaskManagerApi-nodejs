import Express from "express";
const router = Express.Router();
import {
  getAllTasks,
  updateTask,
  deleteTask,
  createTask,
  getTask,
} from "../controller/Task.js";

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);

export default router;
