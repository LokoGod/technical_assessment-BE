import express from "express";
const customerRoutes = express.Router();

import {
  getAllCustomerRecords,
  createCustomerRecords,
  getSpecificCustomerRecords,
  updateCustomerRecord,
  softDeleteCustomerRecord,
  deleteCustomerRecord,
} from "../controllers/customerController";

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
