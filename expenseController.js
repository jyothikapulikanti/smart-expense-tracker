const Expense = require("../models/Expense");

const createExpense = async (req, res) => {
  try {
    const { expenseName, amount, category } = req.body;

    const expense = await Expense.create({
      expenseName,
      amount,
      category,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();

    res.json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createExpense,
  getExpenses,
};