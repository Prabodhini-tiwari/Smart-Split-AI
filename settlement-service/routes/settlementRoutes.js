import express from 'express';
import settlementController from '../controllers/settlementController.js';

const router = express.Router();

// Route to create a settlement
router.post('/', settlementController.createSettlement);

// Route to get all settlements
router.get('/', settlementController.getAllSettlements);

// Route to get settlements for a specific user
router.get('/:userId', settlementController.getUserSettlements);

// Route to update the settlement status (e.g., 'pending' or 'settled')
router.put('/:id', settlementController.updateSettlementStatus);

export default router;
