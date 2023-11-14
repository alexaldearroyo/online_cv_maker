// import logo from './logo.svg';
import "./App.css";

import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [resumeData, setResumeData] = useState({
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certificates: [],
    languages: [],
  });

  const handleDataChange = (newData) => {
    setResumeData(newData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Online CV Maker</h1>
      </header>
      <div className="app-container">
        <div className="form-panel">
          <ResumeForm onDataChange={handleDataChange} />
        </div>
        <div className="preview-panel">
          <ResumePreview data={resumeData} />
        </div>
      </div>
    </div>
  );
}

export default App;
