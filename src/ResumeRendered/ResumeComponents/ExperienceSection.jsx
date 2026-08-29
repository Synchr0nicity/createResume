export default function ExperienceSection({ formData }) {
  return (
    <section className="experienceSection">
      <h4>
        <span className="symbols">/</span>
        Work Experience
      </h4>
      <div className="experienceContainer">
        {Object.keys(formData.jobs).map((key) => {
          const job = formData.jobs[key];
          return (
            <div key={key} className="experienceBox">
              <p>{job.company || "DTL Supply Chain"}</p>
              <div className="miniContainer" style={{ margin: 0, padding: 0 }}>
                <h3
                  style={{
                    color: "rgb(221, 221, 106)",
                    m: "0 !important",
                    padding: "0 !important",
                  }}
                >
                  {job.role || "Forklift Driver"}
                </h3>

                <small>
                  {job.startDate || "3/2023"}
                  {job.startDate && !job.endDate
                    ? " until Present"
                    : ` / ${job.endDate}` || "4/2024"}
                </small>
              </div>
              <p>
                {job.jobDescription ||
                  "responsible for moving goods around warehouses or other industrial sites. They do this by using a forklift to unload deliveries from trucks and stack boxes for storage purposes throughout a warehouse and other industrial property."}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
