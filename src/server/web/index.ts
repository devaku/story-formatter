import express, { Request, Response } from 'express';
const app = express();

// Load Environment Variables
if (process.env.NODE_ENV == 'LOCAL') {
	require('dotenv').config();
}

app.get('/', (req: Request, res: Response) => {
	res.json({
		message: 'HELLO',
	});
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server is listening at port: ${PORT}`);
});
