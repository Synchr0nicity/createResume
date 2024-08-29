import { useState, useEffect } from "react";
import CreateNewJobs from "/src/ResumeForm/ResumeFormComponents/ExperienceComponents/CreateNewJobs";

export default function Experience({
  formData,
  setFormData,
  setCurrentSection,
  handlePrevious,
}) {
  const [newJobs, setNewJobs] = useState([{}]);

  useEffect(() => {
    if (
      formData.jobs &&
      formData.jobs.length > 0
    ) {
      setNewJobs(formData.jobs);
    } else {
      setNewJobs([{}]); // Default state if no projects in formData
    }
  }, [formData.jobs]);

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
        timeFrame: job.timeframe || "",
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
