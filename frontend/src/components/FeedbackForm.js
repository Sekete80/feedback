import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function FeedbackForm({ onFeedbackSubmitted }) {
  const [form, setForm] = useState({
    studentName: "",
    courseCode: "",
    comments: "",
    rating: 1,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      await axios.post(`${API_URL}/api/feedback`, {
        ...form,
        rating: Number(form.rating),
      });
      setForm({ studentName: "", courseCode: "", comments: "", rating: 1 });
      setSuccess("Feedback submitted successfully!");
      if (onFeedbackSubmitted) onFeedbackSubmitted();
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Submit Feedback</h5>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Student Name</label>
            <input
              required
              name="studentName"
              className="form-control"
              value={form.studentName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Course Code</label>
            <input
              required
              name="courseCode"
              className="form-control"
              value={form.courseCode}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Comments</label>
            <textarea
              name="comments"
              className="form-control"
              value={form.comments}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Rating</label>
            <select
              name="rating"
              className="form-select"
              value={form.rating}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5].map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
