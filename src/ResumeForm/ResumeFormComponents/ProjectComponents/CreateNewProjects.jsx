export default function CreateNewProjects({
  index,
  newProjects,
  setNewProjects,
}) {
  const projectData = newProjects[index] || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects[index] = {
        ...updatedProjects[index],
        [name]: value,
      };
      return updatedProjects;
    });
  };

  return (
    <div key={index}>
      <label htmlFor={`project${index}`}>
        Project:
      </label>
      <input
        type="text"
        id={`project${index}`}
        name="project"
        value={projectData.project || ""}
        onChange={handleChange}
        required
      />
      <label htmlFor={`languages${index}`}>
        Languages used:
      </label>
      <input
        type="text"
        id={`languages${index}`}
        name="languages"
        value={projectData.languages || ""}
        onChange={handleChange}
        required
      />
      <label
        htmlFor={`projectDescription${index}`}
      >
        Project Description:
      </label>
      <textarea
        id={`projectDescription${index}`}
        name="projectDescription"
        value={
          projectData.projectDescription || ""
        }
        onChange={handleChange}
        rows="4"
        cols="50"
        required
      />
    </div>
  );
}
