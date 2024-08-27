import { useState } from "react";
import CreateNewProjects from "/src/ResumeForm/ResumeFormComponents/ProjectComponents/CreateNewProjects.jsx";

export default function Projects({
  formData,
  setFormData,
  setCurrentSection,
}) {
  const [newProjects, setNewProjects] = useState([
    {},
  ]);

  function handleNewProject() {
    setNewProjects((prevNewProjects) => [
      ...prevNewProjects,
      {},
    ]);
  }

  const handleNext = () => {
    const updatedProjectsData = newProjects.map(
      (project) => ({
        project: project.project || "",
        languages: project.languages || "",
        projectDescription:
          project.projectDescription || "",
      })
    );

    setFormData((prevData) => ({
      ...prevData,
      projects: updatedProjectsData,
    }));
    setCurrentSection(
      (prevSection) => prevSection + 1
    );
  };

  return (
    <form>
      <h2>Projects and Applications</h2>

      {newProjects.map((_, index) => (
        <CreateNewProjects
          key={index}
          index={index}
          setNewProjects={setNewProjects}
          newProjects={newProjects}
        />
      ))}
      <button
        type="button"
        onClick={handleNewProject}
      >
        Add new project
      </button>
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </form>
  );
}
