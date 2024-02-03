import express from "express";
const userRoutes = express.Router();

import { getAllUsers, deleteUser, signUp } from "../controllers/userController";

userRoutes.route("/").get(getAllUsers)
userRoutes.route("/signup").post(signUp)
userRoutes.route("/:id").delete(deleteUser)

export { userRoutes };
