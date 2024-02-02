import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllInventoryItems = async () => {
  return prisma.inventory.findMany();
};

const createInventoryItems = async (
  name: string,
  description: string,
  manufactureDate: Date,
  expireDate: Date,
  quantity: number
) => {
  return prisma.inventory.create({
    data: { name, description, manufactureDate, expireDate, quantity },
  });
};

const inventoryRepository = {
  getAllInventoryItems,
  createInventoryItems,
};
export default inventoryRepository;
