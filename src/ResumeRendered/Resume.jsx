import "/src/ResumeRendered/Resume.css";
export default function Resume({ formData }) {
  return (
    <>
      <h1>&lt;CV&gt;</h1>
      <h2>
        {formData.personalInformation?.name ||
          "John Smith"}
      </h2>
      <h3>
        {formData.personalInformation
          ?.currentJob || "Forklift Driver"}
        <span>-Contact details below</span>
      </h3>
      <h3>
        {formData.personalInformation?.website ||
          "https://johndoe.com"}
      </h3>
      <h3>
        <span>/</span>Summary
      </h3>
      <p>
        {" "}
        {formData.personalInformation?.summary ||
          "We don't only drive forklifts, we can mow your lawns, and install irrigation to! Don't hesitate to call us for all your bluecollar needs!"}
      </p>
      <div className="projectsContainer">
        <h3>
          <span>/</span>Projects and Applications
        </h3>

        {Object.keys(formData.projects).map(
          (key) => {
            const project =
              formData.projects[key];
            return (
              <div
                className="projectBox"
                key={key}
              >
                <h1>
                  {project.project ||
                    "Tic Tac Toe game"}
                </h1>
                <h3>
                  {project.languages ||
                    "Html && CSS"}
                </h3>
                <p>
                  {project.projectDescription ||
                    "Play tic tac toe, its really not that complicated"}
                </p>
              </div>
            );
          }
        )}
      </div>
      <div className="experienceContainer">
        <h3>
          <span>/</span>Work Experience
        </h3>
        {Object.keys(formData.jobs).map((key) => {
          const job = formData.jobs[key];
          return (
            <div
              key={key}
              className="experienceBox"
            >
              <h2>{job.role || "Bearded man"}</h2>
              <h1>
                {job.company || "Circuis Olay"}
              </h1>
              <h3>
                {job.timeframe || "3/2023-4/2024"}
              </h3>
              <p>
                {job.jobDescription ||
                  "People paid to see a rare sight, that of a bearded man."}
              </p>
            </div>
          );
        })}
      </div>
      <div className="qualitiesContainer">
        <h3>
          <span>/</span>Qualities
        </h3>
        {formData.extraDetails.qualities.map(
          (quality, index) => {
            return (
              <h3 key={index}>
                {quality.name || "Hard working"}
              </h3>
            );
          }
        )}
      </div>
      <div className="skillsContainer">
        <h3>
          <span>/</span>Skills
        </h3>
        {formData.extraDetails.skills.map(
          (skill, index) => {
            return (
              <h3 key={index}>
                {skill.name || "React Developer"}
              </h3>
            );
          }
        )}
      </div>
      <div className="contactDetails">
        <h2>
          {formData.contactDetails?.gitHub ||
            "https://www.github.com/synchr0nicity"}
        </h2>
        <h2>
          {formData.contactDetails?.email ||
            "jimbob@jimbob.com"}
        </h2>
        <h2>
          {formData.contactDetails?.whatsapp ||
            "+306784590"}
        </h2>
        <h2>
          {formData.contactDetails?.address ||
            "none of ya beeswax"}
        </h2>
      </div>
    </>
  );
}
