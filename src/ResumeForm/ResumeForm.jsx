import React, { useState } from "react";
import PersonalInformation from "/src/ResumeForm/ResumeFormComponents/PersonalInformation.jsx";
import Projects from "/src/ResumeForm/ResumeFormComponents/Projects.jsx";
import Experience from "/src/ResumeForm/ResumeFormComponents/Experience.jsx";
import ExtraDetails from "/src/ResumeForm/ResumeFormComponents/ExtraDetails.jsx";
import ContactDetails from "/src/ResumeForm/ResumeFormComponents/ContactDetails.jsx";

export default function ResumeForm({
  formData,
  setFormData,
  active,
  setActive,
}) {
  const [currentSection, setCurrentSection] =
    useState(1);

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;
    const section = dataset.section;

    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentSection(
      (prevSection) => prevSection + 1
    );
  };

  // const handlePrevious = () => {
  //   setCurrentSection(currentSection - 1);
  // };

  return (
    <div>
      {currentSection === 1 && (
        <PersonalInformation
          handleChange={handleChange}
          formData={formData}
          handleSubmit={handleSubmit}
          // handlePrevious={handlePrevious}
        />
      )}
      {currentSection === 2 && (
        <Projects
          formData={formData}
          setFormData={setFormData}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          // handlePrevious={handlePrevious}
        />
      )}
      {currentSection === 3 && (
        <Experience
          formData={formData}
          setFormData={setFormData}
          setCurrentSection={setCurrentSection}
          // handlePrevious={handlePrevious}
        />
      )}
      {currentSection === 4 && (
        <ExtraDetails
          handleChange={handleChange}
          formData={formData}
          handleSubmit={handleSubmit}
          // handlePrevious={handlePrevious}
        />
      )}
      {currentSection === 5 && (
        <ContactDetails
          handleChange={handleChange}
          formData={formData}
          handleSubmit={handleSubmit}
          active={active}
          setActive={setActive}
          // handlePrevious={handlePrevious}
        />
      )}
    </div>
  );
}
