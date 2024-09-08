import { useEffect } from "react";
import CreateNewJobs from "/src/ResumeForm/ResumeFormComponents/ExperienceComponents/CreateNewJobs";

export default function Experience({
  formData,
  setFormData,
  handlePrevious,
  handleSubmit,
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

  const jobs = formData.jobs || {};

  return (
    <form
      onSubmit={handleSubmit}
      className="experienceForm"
    >
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
          handleAdd={handleNewJobs}
        />
      ))}
      <div className="btnContainer">
        <button
          type="button"
          onClick={handlePrevious}
        >
          Back
        </button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
}
