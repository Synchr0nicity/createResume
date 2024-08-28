import { useState } from "react";
import CreateNewJobs from "/src/ResumeForm/ResumeFormComponents/ExperienceComponents/CreateNewJobs";

export default function Experience({
  formData,
  setFormData,
  setCurrentSection,
}) {
  const [newJobs, setNewJobs] = useState([{}]);

  function handleNewJobs() {
    setNewJobs((prevNewJobs) => [
      ...prevNewJobs,
      {},
    ]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const updatedJobsData = newJobs.map(
      (job) => ({
        role: job.role || "",
        company: job.company || "",
        timeFrame: job.company || "",
        jobDescription: job.jobDescription || "",
      })
    );

    setFormData((prevData) => ({
      ...prevData,
      jobs: updatedJobsData,
    }));

    setCurrentSection(
      (prevSection) => prevSection + 1
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Work Experience</h2>

      {newJobs.map((_, index) => (
        <CreateNewJobs
          key={index}
          index={index}
          setNewJobs={setNewJobs}
          newJobs={newJobs}
        />
      ))}

      <button
        type="button"
        onClick={handleNewJobs}
      >
        Add new job
      </button>
      <button type="submit">Next</button>
    </form>
  );
}
