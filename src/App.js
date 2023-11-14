import "./App.css";
import React, { useState, useEffect } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

function App() {
  // Estado para almacenar los datos del CV
  const [resumeData, setResumeData] = useState({
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certificates: [],
    languages: [],
  });

  // Función para manejar los cambios de datos en ResumeForm
  const handleDataChange = (newData) => {
    setResumeData(newData);
  };

// UseEffect para cargar datos almacenados en LocalStorage cuando la página se carga
useEffect(() => {
  const storedData = localStorage.getItem("resumeData");
  if (storedData) {
    setResumeData(JSON.parse(storedData));
  }
}, []);

// UseEffect para cargar datos almacenados en LocalStorage para PersonalInfoForm
useEffect(() => {
  const savedPersonalInfo = localStorage.getItem("personalInfo");
  if (savedPersonalInfo) {
    // Actualizar personalInfo en resumeData
    setResumeData((prevData) => ({
      ...prevData,
      personalInfo: JSON.parse(savedPersonalInfo),
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
          {/* Pasa la función handleDataChange a ResumeForm */}
          <ResumeForm onDataChange={handleDataChange} />
        </div>
        <div className="preview-panel">
          {/* Pasa los datos actualizados a ResumePreview */}
          <ResumePreview data={resumeData} />
        </div>
      </div>
    </div>
  );
}

export default App;
