import userRepository from "../repository/userRepository";

const getAllUsers = async (req: any, res: any) => {
  try {
    const user = await userRepository.getAllUsers();
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createUser = async (req: any, res: any) => {
  try {
    const { name } = req.body;
    const user = await userRepository.createUser(name);
    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllUsers, createUser }