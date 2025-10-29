import React from "react";
import FeedbackForm from "../components/FeedbackForm";

function FeedbackPage() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Student Feedback Form</h2>
      <FeedbackForm onFeedbackSubmitted={() => alert("Feedback submitted!")} />
    </div>
  );
}

export default FeedbackPage;
