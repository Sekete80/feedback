# Student Feedback App (Full Project)

This archive contains a full-stack Student Feedback App:
- backend/ (Node.js + Express + Sequelize + MySQL)
- frontend/ (React + Bootstrap)

## Quick start (on your machine)
1. Ensure Node.js and MySQL are installed.
2. Create the database (replace password if different):
   ```bash
   mysql -u root -p123456 -e "CREATE DATABASE IF NOT EXISTS feedback_db;"
   ```
3. Start backend:
   ```bash
   cd backend
   npm install
   npm start
   ```
4. Start frontend (in a new terminal):
   ```bash
   cd frontend
   npm install
   npm start
   ```
5. Open http://localhost:3000

## Notes
- Backend reads DB credentials from `backend/.env` (pre-filled with the credentials you provided).
- Sequelize will create the `Feedbacks` table automatically on startup.
