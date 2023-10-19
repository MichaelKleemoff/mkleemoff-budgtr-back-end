const express = require('express');
// ROUTER - in charge of all routes
const transactions = express.Router();
// Mock DB
const transactionsData = require('../models/transaction.js');

// INDEX ROUTE
transactions.get('/', (req, res) => {
	if (transactionsData) {
		res.json(transactionsData);
	} else {
		res.redirect('/*');
	}
});

// SHOW ROUTE
transactions.get('/:arrayIndex', (req, res) => {
	const { arrayIndex } = req.params;

	if (transactionsData[arrayIndex]) {
		res.json(transactionsData[arrayIndex]);
	} else {
		res.redirect('/*');
	}
});

// CREATE ROUTE
transactions.post('/', (req, res) => {
	transactionsData.push(req.body);
	res.json(transactionsData[transactionsData.length - 1]);
});

// DESTROY ROUTE
transactions.delete('/:arrayIndex', (req, res) => {
	const { arrayIndex } = req.params;

	if (transactionsData[arrayIndex]) {
		const deletedTransaction = transactionsData.splice(arrayIndex, 1);
		res.status(200).json(deletedTransaction);
	} else {
		res.redirect('/*');
	}
});

module.exports = transactions;
