import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import settlementRoutes from './routes/settlementRoutes.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 4003;

app.use(express.json());

// Routes
app.use('/api/settlements', settlementRoutes);

app.listen(PORT, () => {
  console.log(`Settlement-service running on port ${PORT}`);
});
