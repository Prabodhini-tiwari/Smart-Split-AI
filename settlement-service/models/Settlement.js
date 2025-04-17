import mongoose from 'mongoose';

const settlementSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  owesTo: [
    {
      userId: { type: String, required: true },
      amount: { type: Number, required: true },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'settled'],
    default: 'pending',
  },
});

export default mongoose.model('Settlement', settlementSchema);
