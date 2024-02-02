import express from 'express'
const inventoryRoutes = express.Router()

import { getAllInventoryItems, createInventoryItems } from '../controllers/inventoryController'

inventoryRoutes.route("/").get(getAllInventoryItems).post(createInventoryItems)

export { inventoryRoutes }