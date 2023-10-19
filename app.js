// DEPENDENCIES
const express = require('express');
const transactions = require('./controllers/transactionsController.js');
const cors = require('cors');

// CONFIGURATION
const app = express();

// MIDDLEWARE

// Enable CORS for the server
app.use(cors());

// Turn JSON into usable JS
app.use(express.json());
app.use('/transactions', transactions);

// ROUTES
app.get('/', (req, res) => {
	res.send('💰 Welcome to the Budgtr App 💰');
});

// ERRORS
app.get('*', (req, res) => {
	res.status(404).json({ error: 'Page not found' });
});

// EXPORT
module.exports = app;
