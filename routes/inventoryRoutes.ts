import express from 'express'
import { requireAuth } from '../middleware/requireAuth'
const inventoryRoutes = express.Router()

import { getAllInventoryItems, createInventoryItems, getSpecificInventoryItem, updateInventoryItem, softDeleteInventoryItem, deleteInventoryItem } from '../controllers/inventoryController'

inventoryRoutes.use(requireAuth)

inventoryRoutes.route("/").get(getAllInventoryItems).post(createInventoryItems)
inventoryRoutes.route("/:id").get(getSpecificInventoryItem).put(updateInventoryItem).delete(deleteInventoryItem)
inventoryRoutes.route("/softDelete/:id").put(softDeleteInventoryItem)


export { inventoryRoutes }