import userRepository from "../repository/userRepository";
import jwt from "jsonwebtoken";

const createToken = async (id: number) => {
  return jwt.sign({ id: id }, "thisismysecretpasswordnotsosecretnowisit", {
    expiresIn: "3d",
  });
};

const getAllUsers = async (req: any, res: any) => {
  try {
    const user = await userRepository.getAllUsers();
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const signUp = async (req: any, res: any) => {
  const { name, userName, password } = req.body;
  try {
    const user = await userRepository.signUp(name, userName, password);
    const token = await createToken(user.id);
    res.status(201).json({ userName, password, token });     
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Internal server error" });
  }
};

// const createUser = async (req: any, res: any) => {
//   try {
//     const { name } = req.body;
//     const user = await userRepository.createUser(name);
//     res.status(200).json({ user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

const deleteUser = async (req: any, res: any) => {
  try {
    const id = Number(req.params.id);
    const user = await userRepository.deleteUser(id);
    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllUsers, deleteUser, signUp };
