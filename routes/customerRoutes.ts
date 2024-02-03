import express from "express";
import { requireAuth } from "../middleware/requireAuth";
const customerRoutes = express.Router();

import {
  getAllCustomerRecords,
  createCustomerRecords,
  getSpecificCustomerRecords,
  updateCustomerRecord,
  softDeleteCustomerRecord,
  deleteCustomerRecord,
} from "../controllers/customerController";

customerRoutes.use(requireAuth)

customerRoutes
  .route("/")
  .get(getAllCustomerRecords)
  .post(createCustomerRecords);
customerRoutes
  .route("/:id")
  .get(getSpecificCustomerRecords)
  .put(updateCustomerRecord)
  .delete(deleteCustomerRecord);
customerRoutes.route("/softDelete/:id").put(softDeleteCustomerRecord);

export { customerRoutes };
