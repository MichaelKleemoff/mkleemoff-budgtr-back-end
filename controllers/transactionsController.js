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

module.exports = transactions;
