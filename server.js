// Common js module
// Express import here
const { query } = require('express');
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
	if (req.query.show === 'all') {
		return res.json(books);
	}
	if (req.query.price == 500) {
		const result = books.filter((book) => book.price === 500);
		return res.json(result);
	}
	if (req.query.price == 700) {
		const result = books.filter((book) => book.price === 700);
		return res.json(result);
	}

	// Process Request
	// Response Generator
	// console.log(req.query);
	// const result = books.filter((book) => book.price === 500);
	return res.json(books);
	// res.json(result);
});

// Listening Server
app.listen(8000, (req, res) => {
	console.log('Server is listening port on 8000');
});
