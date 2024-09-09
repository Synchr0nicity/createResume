export default function ProjectsSection({
  formData,
}) {
  return (
    <section className="projectSection">
      <h4>
        <span className="symbols">/</span>
        Projects and Applications
      </h4>
      <div className="projectsContainer">
        {Object.keys(formData.projects).map(
          (key) => {
            const project =
              formData.projects[key];
            return (
              <div
                className="projectBox"
                key={key}
              >
                <h3>
                  {project.project ||
                    "Tic Tac Toe game"}
                </h3>
                <p>
                  {project.languages ||
                    "Html && CSS"}
                </p>
                <p>
                  {project.projectDescription ||
                    "Play tic tac toe- two players X and O compete to get 3 consecutive placements of their symbol on the board to win."}
                </p>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
