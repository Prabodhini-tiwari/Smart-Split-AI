// services/settlementService.js
import Settlement from '../models/Settlement.js';

// Function to calculate settlements based on expenses
const createSettlement = async (expenses) => {
  let userBalances = {};

  expenses.forEach((expense) => {
    const { payer, participants, amount } = expense;

    const splitAmount = amount / participants.length; // Split the amount equally

    participants.forEach((participant) => {
      if (participant !== payer) {
        // Subtract the split amount from the payer's balance
        userBalances[payer] = (userBalances[payer] || 0) - splitAmount;

        // Add the split amount to the participant's balance
        userBalances[participant] = (userBalances[participant] || 0) + splitAmount;
      }
    });
  });

  const settlements = [];

  // Create settlement records for each user
  for (const userId in userBalances) {
    if (userBalances[userId] !== 0) {
      const owesTo = [];

      for (const otherUserId in userBalances) {
        if (userId !== otherUserId && userBalances[otherUserId] > 0) {
          owesTo.push({ userId: otherUserId, amount: Math.abs(userBalances[otherUserId]) });
        }
      }

      const settlement = new Settlement({
        userId,
        owesTo,
        status: 'pending',
      });

      settlements.push(settlement);
      await settlement.save();
    }
  }

  return settlements;
};

// Function to get all settlements
const getAllSettlements = async () => {
  return await Settlement.find();
};

// Function to get settlements for a specific user
// services/settlementService.js

const getUserSettlements = async (userId, status) => {
  try {
    // Build the filter object
    const filter = {
      $or: [
        { userId },
        { 'owesTo.userId': userId }
      ]
    };

    // If status filter is provided, add it to the filter
    if (status) {
      filter.status = status; // Filter based on the status (pending or settled)
    }

    const settlements = await Settlement.find(filter);
    return settlements;
  } catch (error) {
    throw new Error('Error fetching settlements');
  }
};


// Function to update the status of a settlement (pending/settled)
const updateSettlementStatus = async (id, status) => {
  const settlement = await Settlement.findByIdAndUpdate(id, { status }, { new: true });
  return settlement;
};

export default {
  createSettlement,
  getAllSettlements,
  getUserSettlements,
  updateSettlementStatus,
};
