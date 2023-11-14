// App.js

import "./App.css";
import React, { useState, useEffect } from "react";
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

useEffect(() => {
  const storedData = localStorage.getItem("resumeData");
  if (storedData) {
    setResumeData(JSON.parse(storedData));
  }
}, []);

useEffect(() => {
  const savedPersonalInfo = localStorage.getItem("personalInfo");
  if (savedPersonalInfo) {
    setResumeData((prevData) => ({
      ...prevData,
      personalInfo: JSON.parse(savedPersonalInfo),
    }));
  }
}, []);

useEffect(() => {
  const savedExperience = localStorage.getItem("experience");
  if (savedExperience) {
    setResumeData((prevData) => ({
      ...prevData,
      experience: JSON.parse(savedExperience),
    }));
  }
}, []);

useEffect(() => {
  const savedEducation = localStorage.getItem("education");
  if (savedEducation) {
    setResumeData((prevData) => ({
      ...prevData,
      education: JSON.parse(savedEducation),
    }));
  }
}, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Online CV Maker</h1>
      </header>

      <div className="app-container">
        <div className="form-panel">

        <div className="title-bar">
          <p>Edit</p>
        </div>

        <div className="content">

          <ResumeForm onDataChange={handleDataChange} />
        </div>
        </div>

        <div className="preview-panel">

        <div className="title-bar">
          <p>Preview</p>
        </div>

        <div className="content">

          <ResumePreview data={resumeData} />
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
