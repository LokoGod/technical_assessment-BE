import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllInventoryItems = async () => {
  return prisma.inventory.findMany();
};

const createInventoryItems = async (
  name: string,
  description: string,
  price: number,
  quantity: number,
  manufactureDate: string,
  expireDate: string
) => {
  return prisma.inventory.create({
    data: { name, description, price, quantity, manufactureDate, expireDate },
  });
};

const getSpecificInventoryItem = async (id: number) => {
  return prisma.inventory.findUnique({ where: { id: id } });
};

const updateInventoryItem = async () => {};

const softDeleteInventoryItem = async (id: number) => {
  return prisma.inventory.update({
    where: { id: id },
    data: { isDeleted: true },
  });
};

const deleteInventoryItem = async (id: number) => {
    return prisma.inventory.delete({
        where: {id: id}
    })
};

const inventoryRepository = {
  getAllInventoryItems,
  createInventoryItems,
  getSpecificInventoryItem,
  softDeleteInventoryItem,
  deleteInventoryItem
};
export default inventoryRepository;
