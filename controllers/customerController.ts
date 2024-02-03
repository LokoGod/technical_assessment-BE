import customerRepository from "../repository/customerRepository";

const getAllCustomerRecords = async (req: any, res: any) => {
  try {
    const customer = await customerRepository.getAllCustomerRecords();
    res.status(200).json({ customer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createCustomerRecords = async (req: any, res: any) => {
  try {
    const { name, phoneNum } = req.body;
    const customer = await customerRepository.createCustomerRecords(
      name,
      phoneNum
    );
    res.status(201).json({ customer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSpecificCustomerRecords = async (req: any, res: any) => {
  try {
    const id = Number(req.params.id);
    const customer = await customerRepository.getSpecificCustomerRecords(id);
    if (!customer) {
      res.status(404).json({ Error: "Customer not found" });
      return;
    }
    res.status(200).json({ customer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Internal server error" });
  }
};

const updateCustomerRecord = async (req: any, res: any) => {
  try {
    const id = Number(req.params.id);
    const { name, phoneNum } = req.body;
    const customer = await customerRepository.updateCustomerRecord(
      id,
      name,
      phoneNum
    );
    res.status(200).json({ customer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Internal server error" });
  }
};

const softDeleteCustomerRecord = async (req: any, res: any) => {
  try {
    const id = Number(req.params.id);
    const customer = await customerRepository.softDeleteCustomerRecord(id);
    res.status(200).json({ customer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Internal server error" });
  }
};

const deleteCustomerRecord = async (req: any, res: any) => {
  try {
    const id = Number(req.params.id);
    const customer = await customerRepository.deleteCustomerRecord(id);
    res.status(200).json({ customer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Internal server error" });
  }
};

export {
  getAllCustomerRecords,
  createCustomerRecords,
  getSpecificCustomerRecords,
  updateCustomerRecord,
  softDeleteCustomerRecord,
  deleteCustomerRecord,
};
