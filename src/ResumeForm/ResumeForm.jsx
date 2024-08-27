import React, { useState } from "react";
import PersonalInformation from "/src/ResumeForm/ResumeFormComponents/PersonalInformation.jsx";
import Summary from "/src/ResumeForm/ResumeFormComponents/Summary.jsx";
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
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // setIsValid(formData.name.length >= 4); //create new function that takes individual functions for each validation and then reference
    //that in the handleChange function.
  };

  const handleNext = () => {
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
          handleNext={handleNext}
          // handlePrevious={handlePrevious}
        />
      )}
      {currentSection === 2 && (
        <Summary
          handleChange={handleChange}
          formData={formData}
          handleNext={handleNext}
          // handlePrevious={handlePrevious}
        />
      )}
      {currentSection === 3 && (
        <Projects
          formData={formData}
          setFormData={setFormData}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          // handlePrevious={handlePrevious}
        />
      )}
      {currentSection === 4 && (
        <Experience
          handleChange={handleChange}
          formData={formData}
          handleNext={handleNext}
          // handlePrevious={handlePrevious}
        />
      )}
      {currentSection === 5 && (
        <ExtraDetails
          handleChange={handleChange}
          formData={formData}
          handleNext={handleNext}
          // handlePrevious={handlePrevious}
        />
      )}
      {currentSection === 6 && (
        <ContactDetails
          handleChange={handleChange}
          formData={formData}
          handleNext={handleNext}
          active={active}
          setActive={setActive}
          // handlePrevious={handlePrevious}
        />
      )}
    </div>
  );
}
