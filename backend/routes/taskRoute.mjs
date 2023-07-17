import express from "express"
import Task from "../model/taskModel.mjs"
const router = express.Router();
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/taskController.mjs"


router.post("/", createTask)
router.get("/", getTasks)
router.get("/:id", getTask)
router.delete("/:id", deleteTask)
router.put("/:id", updateTask)


export default router
