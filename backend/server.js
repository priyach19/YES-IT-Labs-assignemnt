require('dotenv').config();
const express = require('express');
const db = require('./db');
const cors = require('cors');
const {logger} = require('./middleware/loggerMiddleware');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const PORT=5000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/users', userRoutes);

// to start server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));


