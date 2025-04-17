import Expense from '../models/Expense.js';
import { splitExpense } from '../services/splitService.js';


// Add Expenses
export const addExpense = async (req, res) => {
  try {
    const { description, amount, payerId, participantIds } = req.body;

    if (!description || !amount || !payerId || !participantIds?.length) {
      return res.status(400).json({ msg: 'Missing required fields' });
    }

    const participants = splitExpense(amount, payerId, participantIds);

    const newExpense = new Expense({
      description,
      amount,
      payer: payerId,
      participants
    });

    await newExpense.save();

    res.status(201).json({ msg: 'Expense added successfully', expense: newExpense });
  } catch (error) {
    console.error('Error adding expense:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};


// Get all expenses
export const getAllExpenses = async (req, res) => {
    try {
      const expenses = await Expense.find();
      res.json(expenses);
    } catch (err) {
      res.status(500).json({ msg: 'Server Error' });
    }
  };
  
  // Get expense by ID
  export const getExpenseById = async (req, res) => {
    try {
      const expense = await Expense.findById(req.params.id);
      if (!expense) return res.status(404).json({ msg: 'Expense not found' });
      res.json(expense);
    } catch (err) {
      res.status(500).json({ msg: 'Server Error' });
    }
  };
  
  // Delete expense
  export const deleteExpense = async (req, res) => {
    try {
      const expense = await Expense.findByIdAndDelete(req.params.id);
      if (!expense) return res.status(404).json({ msg: 'Expense not found' });
      res.json({ msg: 'Expense deleted successfully' });
    } catch (err) {
      res.status(500).json({ msg: 'Server Error' });
    }
  };
  
  // Update expense
  export const updateExpense = async (req, res) => {
    try {
      const updatedExpense = await Expense.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedExpense) return res.status(404).json({ msg: 'Expense not found' });
      res.json({ msg: 'Expense updated', expense: updatedExpense });
    } catch (err) {
      res.status(500).json({ msg: 'Server Error' });
    }
  };