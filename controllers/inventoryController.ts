import inventoryRepository from "../repository/inventoryRepository";

const getAllInventoryItems = async (req: any, res: any) => {
  try {
    const inventory = await inventoryRepository.getAllInventoryItems();
    res.status(200).json({ inventory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createInventoryItems = async (req: any, res: any) => {
  try {
    const { name, description, price, quantity, manufactureDate, expireDate } =
      req.body;
    const inventory = await inventoryRepository.createInventoryItems(
      name,
      description,
      price,
      quantity,
      manufactureDate,
      expireDate
    );
    res.status(201).json({ inventory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSpecificInventoryItem = async (req: any, res: any) => {
  try {
    const id = Number(req.params.id);
    const inventory = await inventoryRepository.getSpecificInventoryItem(id);
    res.status(200).json({ inventory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Internal server error" });
  }
};

const softDeleteInventoryItem = async (req: any, res: any) => {
  try {
    const id = Number(req.params.id);
    const inventory = await inventoryRepository.softDeleteInventoryItem(id);
    res.status(200).json({ inventory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Internal server error" });
  }
};

const deleteInventoryItem = async (req: any, res: any) => {
    try {
      const id = Number(req.params.id);
      const inventory = await inventoryRepository.deleteInventoryItem(id);
      res.status(200).json({ inventory });
    } catch (error) {
      console.error(error);
      res.status(500).json({ Error: "Internal server error" });
    }
  };

export {
  getAllInventoryItems,
  createInventoryItems,
  getSpecificInventoryItem,
  softDeleteInventoryItem,
  deleteInventoryItem
};
