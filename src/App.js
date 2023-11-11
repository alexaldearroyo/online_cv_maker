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

      <ResumeForm onDataChange={handleDataChange} />
      <ResumePreview data={resumeData} />
    </div>
  );
}

export default App;
