import express from 'express'
const inventoryRoutes = express.Router()

import { getAllInventoryItems, createInventoryItems, getSpecificInventoryItem, softDeleteInventoryItem, deleteInventoryItem } from '../controllers/inventoryController'

inventoryRoutes.route("/").get(getAllInventoryItems).post(createInventoryItems)
inventoryRoutes.route("/:id").get(getSpecificInventoryItem).delete(deleteInventoryItem)
inventoryRoutes.route("/softDelete/:id").put(softDeleteInventoryItem)


export { inventoryRoutes }