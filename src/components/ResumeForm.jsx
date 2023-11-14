import React, { useState } from "react";

import PersonalInfoForm from "./PersonalInfoForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import ProjectsForm from "./ProjectsForm";
import CertificatesForm from "./CertificatesForm";
import LanguagesForm from "./LanguagesForm";

const ResumeForm = ({ onDataChange }) => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {},
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certificates: [],
    languages: [],
  });

  const handlePersonalInfoUpdate = (newPersonalInfo) => {
    setResumeData({ ...resumeData, personalInfo: newPersonalInfo });
    onDataChange({ ...resumeData, personalInfo: newPersonalInfo });
  };

  const handleExperienceUpdate = (newExperience) => {
    setResumeData({ ...resumeData, experience: newExperience });
    onDataChange({ ...resumeData, experience: newExperience });
  };

  const handleEducationUpdate = (newEducation) => {
    setResumeData({ ...resumeData, education: newEducation });
    onDataChange({ ...resumeData, education: newEducation });
  };

  const handleSkillsUpdate = (newSkills) => {
    setResumeData({ ...resumeData, skills: newSkills });
    onDataChange({ ...resumeData, skills: newSkills });
  };

  const handleProjectsUpdate = (newProjects) => {
    setResumeData({ ...resumeData, projects: newProjects });
    onDataChange({ ...resumeData, projects: newProjects });
  };

  const handleCertificatesUpdate = (newCertificates) => {
    setResumeData({ ...resumeData, certificates: newCertificates });
    onDataChange({ ...resumeData, certificates: newCertificates });
  };

  const handleLanguagesUpdate = (newLanguages) => {
    setResumeData({ ...resumeData, languages: newLanguages });
    onDataChange({ ...resumeData, languages: newLanguages });
  };

  return (
    <div className="Labels">
      <PersonalInfoForm onUpdate={handlePersonalInfoUpdate} />
      <ExperienceForm onUpdate={handleExperienceUpdate} />
      <EducationForm onUpdate={handleEducationUpdate} />
      <SkillsForm onUpdate={handleSkillsUpdate} />
      <ProjectsForm onUpdate={handleProjectsUpdate} />
      <CertificatesForm onUpdate={handleCertificatesUpdate} />
      <LanguagesForm onUpdate={handleLanguagesUpdate} />
    </div>
  );
};

export default ResumeForm;
