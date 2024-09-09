export default function CreateNewProjects({
  projectId,
  project,
  handleChange,
  handleRemove,
  handleAdd,
}) {
  return (
    <div key={projectId}>
      <input
        type="text"
        id={`project${projectId}`}
        name="project"
        value={project.project || ""}
        onChange={(e) =>
          handleChange(e, "project")
        }
        placeholder="Project"
        required
      />
      <input
        type="text"
        id={`languages${projectId}`}
        name="languages"
        value={project.languages || ""}
        onChange={(e) =>
          handleChange(e, "languages")
        }
        placeholder="Languages used"
        required
      />
      <textarea
        id={`projectDescription${projectId}`}
        name="projectDescription"
        value={project.projectDescription || ""}
        onChange={(e) =>
          handleChange(e, "projectDescription")
        }
        rows="4"
        cols="50"
        placeholder="Project Description"
        required
      />
      <div className="btnContainer">
        <img
          src="/icons8-remove-32 (1).png"
          type="button"
          onClick={handleRemove}
          className="removeIcon"
        />
        <img
          src="/icons8-add-32 (1).png"
          type="button"
          onClick={handleAdd}
          className="addIcon"
        />
      </div>
    </div>
  );
}
