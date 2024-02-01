import express from "express";
const userRoutes = express.Router();

import { getAllUsers, createUser } from "../controllers/userController";

userRoutes.route("/").get(getAllUsers).post(createUser);

export { userRoutes };
