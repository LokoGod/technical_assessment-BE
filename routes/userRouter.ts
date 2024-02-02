import express from "express";
const userRoutes = express.Router();

import { getAllUsers, deleteUser } from "../controllers/userController";

userRoutes.route("/").get(getAllUsers)
userRoutes.route("/:id").delete(deleteUser)

export { userRoutes };
