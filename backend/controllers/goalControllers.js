const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async(req, res) => {
  res.status(200).json({ message: "Get Goals" });
});
const createGoal = asyncHandler(async(req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  };
  res.status(201).json({ message: "Create Goal" });
});
const updateGoal = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Update Goal where ID = ${req.params.id}` });
});
const deleteGoal = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Delete Goal where ID = ${req.params.id}` });
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
