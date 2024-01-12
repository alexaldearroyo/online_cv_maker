import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const LanguagesForm = ({ onUpdate }) => {
  const [languagesInfo, setLanguagesInfo] = useState({
    language: "",
    proficiency: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLanguagesInfo({ ...languagesInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(languagesInfo);
  };

  return (
    <div>
      <div className="title-button" onClick={toggleFormVisibility}>
        <h2>Languages Information</h2>
        <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
      </div>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Language:</label>
            <input
              type="text"
              name="language"
              value={languagesInfo.language}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Proficiency:</label>
            <select
              name="proficiency"
              value={languagesInfo.proficiency}
              onChange={handleChange}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Fluent">Fluent</option>
              <option value="Native">Native</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default LanguagesForm;
