import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
    
  },
  payer: {
    type: String, // userId
    required: true
  },
  participants: [
    {
      userId: { type: String, required: true },
      paidShare: { type: Number, default: 0 },  // optional if needed later
      owedShare: { type: Number, required: true }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Expense', expenseSchema);
