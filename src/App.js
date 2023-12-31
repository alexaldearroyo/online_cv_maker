// App.js

import "./App.css";
import React, { useState, useEffect } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function App() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const [resumeData, setResumeData] = useState({
    // Object withe the data of the resume
    personalInfo: {
      fullName: "",
      email: "",
      phoneNumber: "",
      location: "",
    },
    experience: [],
    education: [],
    // skills: [],
    // projects: [],
    // certificates: [],
    // languages: [],
  });

  const handleDataChange = (newData) => {
    // Function to update the resume data
    setResumeData(newData);
  };

  // STORAGE:

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


  // UI:

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`App ${isScrolling ? "scrolling" : ""}`}>

      <div className={`fixed-bar ${isScrolling ? "visible" : ""}`}></div>

      <header className="App-header">
      <a href="https://github.com/alexaldearroyo" target="_blank" rel="noopener noreferrer" className="github-icon">
    <FontAwesomeIcon icon={faGithub} />
  </a>
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
            <p>View</p>
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
