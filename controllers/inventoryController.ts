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
  const { role } = req.user
  if (role !== 'owner') {
    return res.status(403).json({ error: "Forbidden"})
  }
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
    if (!inventory) {
      res.status(404).json({ Error: "Inventory item not found" });
      return;
    }
    res.status(200).json({ inventory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Internal server error" });
  }
};

const updateInventoryItem = async (req: any, res: any) => {
  try {
    const id = Number(req.params.id);
    const { name, description, price, quantity, manufactureDate, expireDate } =
      req.body;
    const inventory = await inventoryRepository.updateInventoryItem(
      id,
      name,
      description,
      price,
      quantity,
      manufactureDate,
      expireDate
    );
    res.status(200).json({ inventory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Internal server error" });
  }
};

const softDeleteInventoryItem = async (req: any, res: any) => {
  const { role } = req.user;
  if (role !== 'owner' && role !== 'manager') {
    return res.status(403).json({ error: "Forbidden" });
  }
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
  const { role } = req.user
  if (role !== 'owner') {
    return res.status(403).json({ error: "Forbidden"})
  }
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
  updateInventoryItem,
  softDeleteInventoryItem,
  deleteInventoryItem,
};
