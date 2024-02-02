import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllInventoryItems = async () => {
  return prisma.inventory.findMany();
};

const createInventoryItems = async (
  name: string,
  description: string,
  price:number,
  quantity: number,
  manufactureDate: string,
  expireDate: string
) => {
  return prisma.inventory.create({
    data: { name, description, price, quantity, manufactureDate, expireDate },
  });
};

const inventoryRepository = {
  getAllInventoryItems,
  createInventoryItems,
};
export default inventoryRepository;
