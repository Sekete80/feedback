# Student Feedback App — Backend

## Setup
1. Ensure MySQL is running and you can connect as root with the provided password.
2. Create the database (run in your terminal):

   ```bash
   mysql -u root -p123456 -e "CREATE DATABASE IF NOT EXISTS feedback_db;"
   ```

3. Install dependencies and start server:

   ```bash
   cd backend
   npm install
   npm start
   ```

The backend will run on port 5000 by default and expose endpoints at `/api/feedback`.
