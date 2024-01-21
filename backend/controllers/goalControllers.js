const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};
const createGoal = (req, res) => {
  res.status(201).json({ message: "Create Goal" });
};
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update Goal where ID = ${req.params.id}` });
};
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete Goal where ID = ${req.params.id}` });
};

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
