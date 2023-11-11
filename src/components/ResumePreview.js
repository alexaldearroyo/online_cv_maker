import React from 'react';

const ResumePreview = ({ data }) => {
  return (
    <div>
        <h2>Resume Preview</h2>

        <div>
            <h3>Personal Information</h3>
            <p>Name: {data.personalInfo?.firstName} {data.personalInfo?.lastName}</p>
            <p>Email: {data.personalInfo?.email}</p>
            <p>Phone: {data.personalInfo?.phoneNumber}</p>
        </div>

        <div>
            <h3>Work Experience</h3>
            {data.experience?.map((exp, index) => (
                <div key={index}>
                    <p>{exp.position} at {exp.company}</p>
                    <p>From: {exp.startDate} To: {exp.endDate}</p>
                    <p>Description: {exp.description}</p>
                </div>
            ))}
        </div>

        <div>
            <h3>Education</h3>
            {data.education?.map((edu, index) => (
                <div key={index}>
                    <p>{edu.degree} at {edu.institution}</p>
                    <p>Year of completion: {edu.year}</p>
                </div>
            ))}
        </div>

        <div>
            <h3>Skills</h3>
            {data.skills?.map((skill, index) => (
                <div key={index}>
                    <p>{skill}</p>
                </div>
            ))}
        </div>

        <div>
            <h3>Projects</h3>
            {data.projects?.map((project, index) => (
                <div key={index}>
                    <p>{project.name}</p>
                    <p>Description: {project.description}</p>
                </div>
            ))}
        </div>

        <div>
            <h3>Certificates</h3>
            {data.certificates?.map((certificate, index) => (
                <div key={index}>
                    <p>{certificate.name}</p>
                    <p>From: {certificate.institution}</p>
                    <p>Year: {certificate.year}</p>
                </div>
            ))}
        </div>

        <div>
            <h3>Languages</h3>
            {data.languages?.map((language, index) => (
                <div key={index}>
                    <p>{language.name}</p>
                    <p>Level: {language.level}</p>
                </div>
            ))}
        </div>

    </div>
  );
};

export default ResumePreview;
