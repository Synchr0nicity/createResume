export default function CreateNewProjects({
  projectId,
  project,
  handleChange,
  handleRemove,
}) {
  return (
    <div key={projectId}>
      <label htmlFor={`project${projectId}`}>
        Project:
      </label>
      <input
        type="text"
        id={`project${projectId}`}
        name="project"
        value={project.project || ""}
        onChange={(e) =>
          handleChange(e, "project")
        }
        required
      />
      <label htmlFor={`languages${projectId}`}>
        Languages used:
      </label>
      <input
        type="text"
        id={`languages${projectId}`}
        name="languages"
        value={project.languages || ""}
        onChange={(e) =>
          handleChange(e, "languages")
        }
        required
      />
      <label
        htmlFor={`projectDescription${projectId}`}
      >
        Project Description:
      </label>
      <textarea
        id={`projectDescription${projectId}`}
        name="projectDescription"
        value={project.projectDescription || ""}
        onChange={(e) =>
          handleChange(e, "projectDescription")
        }
        rows="4"
        cols="50"
        required
      />
      <button
        type="button"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
}
