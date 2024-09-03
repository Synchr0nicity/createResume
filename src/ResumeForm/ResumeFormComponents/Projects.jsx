import CreateNewProjects from "/src/ResumeForm/ResumeFormComponents/ProjectComponents/CreateNewProjects.jsx";
import { useEffect } from "react";
export default function Projects({
  formData,
  setFormData,
  setCurrentSection,
  handlePrevious,
}) {
  useEffect(() => {
    if (
      !formData.projects ||
      Object.keys(formData.projects).length === 0
    ) {
      handleNewProject();
    }
  }, [formData.projects]);

  function handleNewProject() {
    const newProjectId = crypto.randomUUID();
    setFormData((prevFormData) => ({
      ...prevFormData,
      projects: {
        ...prevFormData.projects,
        [newProjectId]: {
          project: "",
          languages: "",
          projectDescription: "",
        },
      },
    }));
  }

  function handleChange(e, projectId, field) {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      projects: {
        ...prevData.projects,
        [projectId]: {
          ...prevData.projects[projectId],
          [field]: value,
        },
      },
    }));
  }

  function handleRemove(projectId) {
    setFormData((prevFormData) => {
      const {
        [projectId]: _,
        ...remainingProjects
      } = prevFormData.projects;
      return {
        ...prevFormData,
        projects: remainingProjects,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentSection(
      (prevSection) => prevSection + 1
    );
  };

  const projects = formData.projects || {};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Projects and Applications</h2>

      {Object.keys(projects).map((projectId) => (
        <CreateNewProjects
          key={projectId}
          projectId={projectId}
          project={formData.projects[projectId]}
          handleChange={(e, field) =>
            handleChange(e, projectId, field)
          }
          handleRemove={() =>
            handleRemove(projectId)
          }
        />
      ))}
      <button
        type="button"
        onClick={handleNewProject}
      >
        Add new project
      </button>
      <button
        type="button"
        onClick={handlePrevious}
      >
        Back
      </button>
      <button type="submit">Next</button>
    </form>
  );
}
