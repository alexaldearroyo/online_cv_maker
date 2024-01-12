import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ProjectsForm = ({ onUpdate }) => {
  const [projectsInfo, setProjectsInfo] = useState({
    projectName: "",
    projectDescription: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProjectsInfo({ ...projectsInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(projectsInfo);
  };

  return (
    <div>
      <div className="title-button" onClick={toggleFormVisibility}>
        <h2>Projects Information</h2>
        <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
      </div>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Project Name:</label>
            <input
              type="text"
              name="projectName"
              value={projectsInfo.projectName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Project Description:</label>
            <textarea
              name="projectDescription"
              value={projectsInfo.projectDescription}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ProjectsForm;
