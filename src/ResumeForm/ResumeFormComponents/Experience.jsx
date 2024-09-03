import { useEffect } from "react";
import CreateNewJobs from "/src/ResumeForm/ResumeFormComponents/ExperienceComponents/CreateNewJobs";

export default function Experience({
  formData,
  setFormData,
  setCurrentSection,
  handlePrevious,
}) {
  useEffect(() => {
    if (
      !formData.jobs ||
      Object.keys(formData.jobs).length === 0
    ) {
      handleNewJobs();
    }
  }, [formData.jobs]);

  function handleNewJobs() {
    const jobId = crypto.randomUUID();
    setFormData((prevData) => ({
      ...prevData,
      jobs: {
        ...prevData.jobs,
        [jobId]: {
          role: "",
          company: "",
          timeframe: "",
          jobDescription: "",
        },
      },
    }));
  }

  function handleChange(e, jobId, field) {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      jobs: {
        ...prevData.jobs,
        [jobId]: {
          ...prevData.jobs[jobId],
          [field]: value,
        },
      },
    }));
  }

  function handleRemove(jobId) {
    setFormData((prevData) => {
      const { [jobId]: _, ...remainingJobs } =
        prevData.jobs;
      return { ...prevData, jobs: remainingJobs };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentSection(
      (prevSection) => prevSection + 1
    );
  }

  const jobs = formData.jobs || {};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Work Experience</h2>

      {Object.keys(jobs).map((jobId) => (
        <CreateNewJobs
          key={jobId}
          jobId={jobId}
          job={formData.jobs[jobId]}
          handleChange={(e, field) =>
            handleChange(e, jobId, field)
          }
          handleRemove={() => handleRemove(jobId)}
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
