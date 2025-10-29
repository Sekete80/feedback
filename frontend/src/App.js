import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage";
import ReportsPage from "./pages/ReportsPage";
import "./index.css";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">Feedback System</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Submit Feedback</Link>
            <Link className="nav-link" to="/reports">View Reports</Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<FeedbackPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
