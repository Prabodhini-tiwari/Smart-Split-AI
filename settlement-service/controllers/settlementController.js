 
import settlementService from '../services/settlementService.js';

// Controller to create a settlement
const createSettlement = async (req, res) => {
    const  {expenses}  = req.body;
  
    console.log("Received expenses in controller:", expenses); // Debug log
  
    try {
      const settlements = await settlementService.createSettlement(expenses);
      res.status(201).json(settlements);
    } catch (error) {
      console.error("Error in createSettlement controller:", error); // Log the actual error
      res.status(500).json({ message: 'Failed to create settlement', error });
    }
  };
  

// Controller to get all settlements
const getAllSettlements = async (req, res) => {
  try {
    const settlements = await settlementService.getAllSettlements();
    res.status(200).json(settlements);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve settlements' });
  }
};

// Controller to get settlements for a specific user
const getUserSettlements = async (req, res) => {
    const { userId } = req.params;
    const { status } = req.query; // Get ?status=pending or ?status=settled
  
    try {
      // Pass status filter to the service
      const settlements = await settlementService.getUserSettlements(userId, status);
      res.status(200).json(settlements);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve user settlements' });
    }
  };

// Controller to update the settlement status
const updateSettlementStatus = async (req, res) => {
  console.log('💬 Body received:', req.body);
  const { id } = req.params;
  const { status } = req.body;

   

  try {
    const settlement = await settlementService.updateSettlementStatus(id, status);
    res.status(200).json(settlement);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update settlement status' });
  }
};

export default {
  createSettlement,
  getAllSettlements,
  getUserSettlements,
  updateSettlementStatus
};
