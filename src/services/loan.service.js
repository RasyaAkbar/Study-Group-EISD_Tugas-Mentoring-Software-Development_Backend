const { Loan, User, Book } = require('../models');

exports.createLoan = async (loanData) => {
  return await Loan.create(loanData);
};

exports.findAllLoans = async () => {
  return await Loan.findAll({ include: [User, Book] });
};

exports.findLoanById = async (id) => {
  return await Loan.findByPk(id, { include: [User, Book] });
};

exports.updateLoan = async (id, updateData) => {
  const loan = await Loan.findByPk(id);
  if (!loan) throw new Error('Loan not found');
  await loan.update(updateData);
  return loan;
};

exports.deleteLoan = async (id) => {
  const loan = await Loan.findByPk(id);
  if (!loan) throw new Error('Loan not found');
  await loan.destroy();
};