const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const sequelize = require('./db');
const feedbackRoutes = require('./routes/feedbackRoutes');
const Feedback = require('./models/Feedback');
const path = require('path'); // <- Add this

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

// -------------------------------
// Serve React frontend in production
// -------------------------------
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});
