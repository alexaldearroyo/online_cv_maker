import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CertificatesForm = ({ onUpdate }) => {
  const [certificatesInfo, setCertificatesInfo] = useState({
    certificateName: "",
    issuingOrganization: "",
    issueDate: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCertificatesInfo({ ...certificatesInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(certificatesInfo);
  };

  return (
    <div>
      <div className="title-button" onClick={toggleFormVisibility}>
        <h2>Certificates Information</h2>
        <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
      </div>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Certificate Name:</label>
            <input
              type="text"
              name="certificateName"
              value={certificatesInfo.certificateName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Issuing Organization:</label>
            <input
              type="text"
              name="issuingOrganization"
              value={certificatesInfo.issuingOrganization}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Issue Date:</label>
            <input
              type="date"
              name="issueDate"
              value={certificatesInfo.issueDate}
              onChange={handleChange}
            />
          </div>
          {/* Agrega más campos de certificados según sea necesario */}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default CertificatesForm;
