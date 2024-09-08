import "/src/ResumeRendered/Resume.css";
import { forwardRef } from "react";

const Resume = forwardRef(({ formData }, ref) => {
  const NumberList = ({ number }) => {
    const numbers = Array.from(
      { length: number },
      (_, i) => i + 1
    );

    return (
      <div className="number-list">
        {numbers.map((number) => (
          <span key={number}>{number}</span>
        ))}
      </div>
    );
  };

  return (
    <div
      ref={ref}
      className="resumeContainer shadow"
    >
      <div className="resumeMargin">
        <NumberList number={30} />
      </div>
      <div className="resumeContent">
        <main>
          <h1>
            <span className="symbols">&lt;</span>
            CV
            <span className="symbols">&gt;</span>
          </h1>
          <div className="largeContainer">
            <section className="personalDetailsSection">
              <div className="miniContainer">
                <h2>
                  {formData.personalInformation
                    ?.name || "John Foreman"}
                </h2>
                <p>
                  {formData.personalInformation
                    ?.currentJob ||
                    "Forklift Driver"}
                </p>
              </div>

              <h4>
                <span className="symbols">/</span>
                Summary
              </h4>
              <p>
                {" "}
                {formData.personalInformation
                  ?.summary ||
                  "Skilled forklift driver adept at working quickly in fast-paced, demanding environments. Strong team player and problem-solver. Offering top communication and conflict resolution skills as well as a comprehensive background in shipping and receiving."}
              </p>
            </section>
            <section className="contactDetailsSection">
              <div className="contactDetails">
                <h3>
                  <span className="symbols">
                    /
                  </span>
                  Contact Details:
                </h3>
                <p>
                  {formData.contactDetails
                    ?.gitHub ||
                    "https://www.facebook.com/john-foreman"}
                </p>
                <p>
                  {formData.contactDetails
                    ?.email ||
                    "johnF18@gmail.com"}
                </p>
                <p>
                  {formData.contactDetails
                    ?.whatsapp || "+306784590045"}
                </p>
                <p>
                  {formData.contactDetails
                    ?.address ||
                    "Las Vegas, Henderson"}
                </p>
              </div>
            </section>
          </div>
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
          <section className="experienceSection">
            <h4>
              <span className="symbols">/</span>
              Work Experience
            </h4>
            <div className="experienceContainer">
              {Object.keys(formData.jobs).map(
                (key) => {
                  const job = formData.jobs[key];
                  return (
                    <div
                      key={key}
                      className="experienceBox"
                    >
                      <p>
                        {job.company ||
                          "DTL Supply Chain"}
                      </p>
                      <div className="miniContainer">
                        <h3>
                          {job.role ||
                            "Forklift Driver"}
                        </h3>

                        <small>
                          {job.timeframe ||
                            "3/2023-4/2024"}
                        </small>
                      </div>
                      <p>
                        {job.jobDescription ||
                          "responsible for moving goods around warehouses or other industrial sites. They do this by using a forklift to unload deliveries from trucks and stack boxes for storage purposes throughout a warehouse and other industrial property."}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </section>
        </main>
        <footer>
          <section className="extraDetailsSection">
            <div className="qualitiesContainer">
              <h4>
                <span className="symbols">/</span>
                Qualities
              </h4>
              <ul className="qualitiesListContainer">
                {formData.extraDetails.qualities.map(
                  (quality, index) => {
                    return (
                      <li key={index}>
                        {quality.name ||
                          "Hard working"}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
            <div className="skillsContainer">
              <h4>
                <span className="symbols">/</span>
                Skills
              </h4>
              <ul className="skillsListContainer">
                {formData.extraDetails.skills.map(
                  (skill, index) => {
                    return (
                      <li key={index}>
                        {skill.name ||
                          "Forklift Driver's license, type 2."}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
});

export default Resume;
