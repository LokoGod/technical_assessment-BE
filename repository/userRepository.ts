import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllUsers = async () => {
  return prisma.user.findMany({});
};

const createUser = async (name: string) => {
  return prisma.user.create({
    data: { name }
  });
};

const userRepository = { getAllUsers, createUser };
export default userRepository;
