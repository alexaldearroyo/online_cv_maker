import React, { useState } from "react";

const Categories = ({ onVisibilityChange, visibleForms }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const handleVisibilityChange = (formName) => {
      onVisibilityChange(formName, !visibleForms[formName]);
    };
  

  return (
    <div className="CategoriesMenu">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Categories</button>
      {isMenuOpen && (
        <div>
          <label>
            <input
              type="checkbox"
              checked={visibleForms.experience}
              onChange={() => handleVisibilityChange('experience')}
            />
            Experience
          </label>
          <label>
            <input
              type="checkbox"
              checked={visibleForms.education}
              onChange={() => handleVisibilityChange('education')}
            />
            Education
          </label>
          <label>
            <input
              type="checkbox"
              checked={visibleForms.skills}
              onChange={() => handleVisibilityChange('skills')}
            />
            Skills
          </label>
          <label>
            <input
              type="checkbox"
              checked={visibleForms.projects}
              onChange={() => handleVisibilityChange('projects')}
            />
            Projects
          </label>
          <label>
            <input
              type="checkbox"
              checked={visibleForms.certificates}
              onChange={() => handleVisibilityChange('certificates')}
            />
            Certificates
          </label>
          <label>
            <input
              type="checkbox"
              checked={visibleForms.languages}
              onChange={() => handleVisibilityChange('languages')}
            />
            Languages
          </label>
        </div>
      )}
    </div>
  );
};

export default Categories;
