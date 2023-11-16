// components/ResumePreview.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const ResumePreview = ({ data }) => {
  const hasData = () => {
    const hasPersonalInfo =
      data.personalInfo &&
      Object.values(data.personalInfo).some((value) => value);
    const hasExperience =
      data.experience &&
      data.experience.some((exp) => exp.company || exp.role || exp.description);
    const hasEducation = data.education && data.education.length > 0;
    return hasPersonalInfo || hasExperience || hasEducation;
  };

  if (!hasData()) {
    return (
      <div className="info-text" style={{ fontFamily: "monospace" }}>
        No data introduced yet.
      </div>
    );
  }

  return (
    <div className="resume-container">
      <div className="header">
        <h1>{data.personalInfo?.fullName}</h1>
        <div className="sub-info">
          {data.personalInfo?.email && (
            <>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-600 mr-1"
              />
              <p>{data.personalInfo.email}</p>
              <span className="separator">|</span>
            </>
          )}
          {data.personalInfo?.phoneNumber && (
            <>
              <FontAwesomeIcon icon={faPhone} className="text-gray-600 mx-1" />
              <p>{data.personalInfo.phoneNumber}</p>
              <span className="separator">|</span>
            </>
          )}
          {data.personalInfo?.location && (
            <>
              <FontAwesomeIcon
                icon={faMapMarker}
                className="text-gray-600 mx-1"
              />
              <p>{data.personalInfo.location}</p>
            </>
          )}
        </div>
      </div>

      <br></br>

      {data.experience &&
        data.experience.some(
          (exp) => exp.company || exp.role || exp.description
        ) && (
          <div className="section">
            <h3>Experience</h3>
            <ul>
              {data.experience.map((exp, index) => (
                <li key={index}>
                  <div className="list-item">
                    <div className="list-header">
                      <p className="company">{exp.company}</p>
                      <p>
                        {exp.startDate} - {exp.endDate}
                      </p>
                    </div>
                    <p className="role">{exp.role}</p>
                    {exp.description && (
                      <p className="description-bullet">{exp.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

      {data.education && data.education.length > 0 && (
        <div className="section">
          <h3>Education</h3>
          <ul>
            {data.education.map((edu, index) => (
              <li key={index}>
                <div className="list-item">
                  <div className="list-header">
                    <p className="school-name">{edu.schoolName}</p>
                      <p>{edu.graduationYear}</p>
                      </div>
                    <p className="degree">{edu.degree}</p>
                  
                  <p className="description-bullet">{edu.major}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* <div className="section">
        <h3>Skills</h3>
      </div>

      <div className="section">
        <h3>Projects</h3>
      </div>

      <div className="section">
        <h3>Certificates</h3>
      </div>

      <div className="section">
        <h3>Languages</h3>
      </div> */}
    </div>
  );
};

export default ResumePreview;
