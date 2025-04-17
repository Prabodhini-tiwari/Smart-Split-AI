// services/splitService.js

export const splitExpense = (totalAmount, payerId, participantIds) => {
    const numParticipants = participantIds.length;
    const individualShare = parseFloat((totalAmount / numParticipants).toFixed(2));
  
    const splitResult = participantIds.map((userId) => {
      return {
        userId,
        paidShare: userId === payerId ? totalAmount : 0,
        owedShare: individualShare
      };
    });
  
    return splitResult;
  };
  