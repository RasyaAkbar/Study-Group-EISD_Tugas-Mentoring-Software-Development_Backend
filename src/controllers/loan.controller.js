const loanService = require('../services/loan.service');

exports.create = async (req, res) => {
  try {
    const loanData = req.body;
    const newLoan = await loanService.createLoan(loanData);
    res.status(201).json(newLoan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const loans = await loanService.findAllLoans();
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const loanId = req.params.id;
    const loan = await loanService.findLoanById(loanId);
    if (loan) {
      res.status(200).json(loan);
    } else {
      res.status(404).json({ message: `Loan with id=${loanId} not found.` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const loanId = req.params.id;
    const updateData = req.body;
    const updatedLoan = await loanService.updateLoan(loanId, updateData);
    res.status(200).json(updatedLoan);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const loanId = req.params.id;
    await loanService.deleteLoan(loanId);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};