const express = require('express');
const app = express();

// Load Environment Variables
if (process.env.NODE_ENV == 'LOCAL') {
	require('dotenv').config();
}

app.get('/', (req, res) => {
	res.json({
		message: 'HELLO',
	});
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) => {
	console.log(`Server is listening at port: ${PORT}`);
});
