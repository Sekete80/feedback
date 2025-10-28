import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    async function load() {
      setError(null);
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/api/feedback`);
        setFeedbacks(res.data);
      } catch (err) {
        setError(err.response?.data?.error || err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [API_URL]);

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Feedback Dashboard</h5>
        {loading && <p>Loading...</p>}
        {error && <div className="alert alert-danger">{error}</div>}
        {!loading && !error && (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Course</th>
                  <th>Comments</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center">No feedback yet</td>
                  </tr>
                )}
                {feedbacks.map(f => (
                  <tr key={f.id}>
                    <td>{f.studentName}</td>
                    <td>{f.courseCode}</td>
                    <td>{f.comments}</td>
                    <td>{f.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
