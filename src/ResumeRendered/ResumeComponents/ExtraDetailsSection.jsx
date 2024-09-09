export default function ({ formData }) {
  return (
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
                  {quality.name || "Hard working"}
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
  );
}
