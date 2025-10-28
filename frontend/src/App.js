import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import Dashboard from './components/Dashboard';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  return (
    <div className="container">
      <h1 className="my-4">Student Feedback App</h1>
      <div className="row">
        <div className="col-md-5">
          <FeedbackForm onFeedbackSubmitted={() => setRefreshKey(k => k + 1)} />
        </div>
        <div className="col-md-7">
          <Dashboard key={refreshKey} />
        </div>
      </div>
    </div>
  );
}

export default App;
