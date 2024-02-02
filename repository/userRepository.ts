import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllUsers = async () => {
  return prisma.user.findMany({});
};

// const createUser = async (name: string, userName: string, password: string) => {
//   return prisma.user.create({
//     data: { name },
//   });
// };

const deleteUser = async (id: number) => {
  return prisma.user.delete({ where: { id: id } });
};

const userRepository = { getAllUsers, deleteUser };
export default userRepository;
