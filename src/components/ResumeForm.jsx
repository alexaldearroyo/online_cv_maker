// components/ResumeForm.js

import React, { useState } from "react";

import PersonalInfoForm from "./PersonalInfoForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
// import SkillsForm from "./SkillsForm";
// import ProjectsForm from "./ProjectsForm";
// import CertificatesForm from "./CertificatesForm";
// import LanguagesForm from "./LanguagesForm";

const ResumeForm = ({ onDataChange }) => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {},
    experience: [],
    education: [],
    // skills: [],
    // projects: [],
    // certificates: [],
    // languages: [],
  });


  // UPDATE INFO:

  const handlePersonalInfoUpdate = (newPersonalInfo) => {
    setResumeData(prevData => ({ ...prevData, personalInfo: newPersonalInfo }));
    onDataChange(prevData => ({ ...prevData, personalInfo: newPersonalInfo }));
  };
  

  const handleExperienceUpdate = (newExperience) => {
    setResumeData((prevData) => ({
      ...prevData,
      experience: newExperience,
    }));
    onDataChange((prevData) => ({
      ...prevData,
      experience: newExperience,
    }));
  };

  const handleEducationUpdate = (newEducation) => {
    setResumeData(prevData => ({ ...prevData, education: newEducation }));
    onDataChange(prevData => ({ ...prevData, education: newEducation }));
  };
  

  // const handleSkillsUpdate = (newSkills) => {
  //   setResumeData({ ...prevData, skills: newSkills });
  //   onDataChange({ ...prevData, skills: newSkills });
  // };

  // const handleProjectsUpdate = (newProjects) => {
  //   setResumeData({ ...prevData, projects: newProjects });
  //   onDataChange({ ...prevData, projects: newProjects });
  // };

  // const handleCertificatesUpdate = (newCertificates) => {
  //   setResumeData({ ...prevData, certificates: newCertificates });
  //   onDataChange({ ...prevData, certificates: newCertificates });
  // };

  // const handleLanguagesUpdate = (newLanguages) => {
  //   setResumeData({ ...prevData, languages: newLanguages });
  //   onDataChange({ ...prevData, languages: newLanguages });
  // };

 // RENDER:

  return (
    <div className="Labels">
      <PersonalInfoForm onUpdate={handlePersonalInfoUpdate} />
      <ExperienceForm onUpdate={handleExperienceUpdate} />
      <EducationForm onUpdate={handleEducationUpdate} />
      {/* <SkillsForm onUpdate={handleSkillsUpdate} />
      <ProjectsForm onUpdate={handleProjectsUpdate} />
      <CertificatesForm onUpdate={handleCertificatesUpdate} />
      <LanguagesForm onUpdate={handleLanguagesUpdate} /> */}
    </div>
  );
};

export default ResumeForm;
