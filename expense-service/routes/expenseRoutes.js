import express from 'express';
import {addExpense,getAllExpenses,getExpenseById,deleteExpense,updateExpense} from '../controllers/expenseController.js';
  
  const router = express.Router();
  
  router.post('/', addExpense);
  router.get('/', getAllExpenses);  
  router.get('/:id', getExpenseById);  
  router.delete('/:id', deleteExpense); 
  router.put('/:id', updateExpense); 
  
  export default router;