const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const sequelize = require('./db');
const feedbackRoutes = require('./routes/feedbackRoutes');
const Feedback = require('./models/Feedback');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/feedback', feedbackRoutes);

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Database connected.');
    // Ensure tables exist
    await sequelize.sync();
    console.log('Models synchronized.');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();
