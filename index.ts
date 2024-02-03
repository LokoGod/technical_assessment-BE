import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

// Import custom routes
import { userRoutes } from "./routes/userRoutes";
import { inventoryRoutes } from "./routes/inventoryRoutes";
import { customerRoutes } from "./routes/customerRoutes";

// Instances
const app = express();

// Middleware
app.use(bodyParser.json());

// API routing
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/inventory", inventoryRoutes)
app.use("/api/v1/customer", customerRoutes)

const port = process.env.PORT || 9000;

// Spin-up server
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
