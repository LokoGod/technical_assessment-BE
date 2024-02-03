import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllCustomerRecords = async () => {
  return prisma.customer.findMany();
};

const createCustomerRecords = async (name: string, phoneNum: number) => {
  return prisma.customer.create({
    data: { name, phoneNum },
  });
};

const getSpecificCustomerRecords = async (id: number) => {
  return prisma.customer.findUnique({ where: { id: id } });
};

const updateCustomerRecord = async (
  id: number,
  name: string,
  phoneNum: number
) => {
  return prisma.customer.update({
    where: { id: id },
    data: { name, phoneNum },
  });
};

const softDeleteCustomerRecord = async (id: number) => {
  return prisma.customer.update({
    where: { id: id },
    data: { isDeleted: true },
  });
};

const deleteCustomerRecord = async (id: number) => {
  return prisma.customer.delete({
    where: { id: id },
  });
};

const customerRepository = {
  getAllCustomerRecords,
  createCustomerRecords,
  getSpecificCustomerRecords,
  updateCustomerRecord,
  softDeleteCustomerRecord,
  deleteCustomerRecord,
};
export default customerRepository;
