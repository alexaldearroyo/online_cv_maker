// components/ResumePreview.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarker } from "@fortawesome/free-solid-svg-icons";


const ResumePreview = ({ data }) => {
  return (
    <div className="resume-container">
      <div className="header">
        <h1>{data.personalInfo?.fullName}</h1>
        <div className="sub-info">
        <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-1" />
          <p>{data.personalInfo?.email}</p>
          <span className="separator">|</span>
          <FontAwesomeIcon icon={faPhone} className="text-gray-600 mx-1" />
          <p>{data.personalInfo?.phoneNumber}</p>
          <span className="separator">|</span>
          {data.personalInfo?.location && (
            <>
                  <FontAwesomeIcon icon={faMapMarker} className="text-gray-600 mx-1" />
            <p>{data.personalInfo.location}</p>
            </>
          )}
     </div>
     </div>
     <hr /> 
      <div className="section">
        <h3>Experience</h3>
      </div>

      <div className="section">
        <h3>Education</h3>
      </div>

      <div className="section">
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
      </div>
    </div>
  );
};

export default ResumePreview;
