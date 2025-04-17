// server.js
import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import expenseRoutes from './routes/expenseRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4002;

app.use(cors());
app.use(express.json());

connectDB();
app.use('/api/expenses', expenseRoutes);

app.listen(PORT, () => {
    console.log(`Expense service running on port ${PORT}`);
});
