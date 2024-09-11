import React, {
  useState,
  useEffect,
} from "react";
import PersonalInformation from "/src/ResumeForm/ResumeFormComponents/PersonalInformation.jsx";
import Projects from "/src/ResumeForm/ResumeFormComponents/ProjectComponents/Projects.jsx";
import Experience from "/src/ResumeForm/ResumeFormComponents/ExperienceComponents/Experience.jsx";
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

  useEffect(() => {
    const storedFormData =
      localStorage.getItem("formData");
    const storedSectionData =
      localStorage.getItem("currentSection");

    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }

    if (storedSectionData) {
      setCurrentSection(
        JSON.parse(storedSectionData)
      );
    }
  }, []);

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
    localStorage.setItem(
      "formData",
      JSON.stringify(formData)
    );

    if (currentSection === 5) {
      finalSubmit();
    } else {
      const newSection = currentSection + 1;
      setCurrentSection(newSection);
      localStorage.setItem(
        "currentSection",
        newSection
      );
    }
  };

  const finalSubmit = () => {
    alert(
      "Congratulations, you completed your resume."
    );
    setActive(false);
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => {
        const newSection = prev - 1;
        localStorage.setItem(
          "currentSection",
          JSON.stringify(newSection)
        );
        return newSection;
      });
    }
  };

  return (
    <div className={"formContainer"}>
      {currentSection === 1 && (
        <PersonalInformation
          handleChange={handleChange}
          formData={formData}
          handleSubmit={handleSubmit}
          handlePrevious={handlePrevious}
        />
      )}
      {currentSection === 2 && (
        <ContactDetails
          handleChange={handleChange}
          formData={formData}
          handleSubmit={handleSubmit}
          active={active}
          setActive={setActive}
          handlePrevious={handlePrevious}
        />
      )}
      {currentSection === 3 && (
        <Projects
          formData={formData}
          setFormData={setFormData}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          handlePrevious={handlePrevious}
          handleSubmit={handleSubmit}
        />
      )}
      {currentSection === 4 && (
        <Experience
          formData={formData}
          setFormData={setFormData}
          setCurrentSection={setCurrentSection}
          handlePrevious={handlePrevious}
          handleSubmit={handleSubmit}
        />
      )}
      {currentSection === 5 && (
        <ExtraDetails
          formData={formData}
          setFormData={setFormData}
          setCurrentSection={setCurrentSection}
          handlePrevious={handlePrevious}
          setActive={setActive}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
