// Common js module
// Express import here
const express = require('express');

// Create a application
const app = express();

// In Memory DB
const books = [
	{
		id: 1,
		name: 'Java',
		price: 500,
	},
	{
		id: 2,
		name: 'JavaScript',
		price: 700,
	},
	{
		id: 3,
		name: 'C#',
		price: 900,
	},
];

// Create route
app.get('/books', (req, res) => {
	// Process Request
	// Response Generator
	res.json(books);
});

// Listening Server
app.listen(8000, (req, res) => {
	console.log('Server is listening port on 8000');
});
