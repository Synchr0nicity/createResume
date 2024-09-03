export default function CreateNewJobs({
  jobId,
  job,
  handleChange,
  handleRemove,
}) {
  return (
    <div key={jobId}>
      <label htmlFor={`role${jobId}`}>Role</label>
      <input
        type="text"
        id={`role${jobId}`}
        name="role"
        value={job.role || ""}
        data-section="experience"
        onChange={(e) => handleChange(e, "role")}
        required
      />
      <label htmlFor={`company${jobId}`}>
        Company:
      </label>
      <input
        type="text"
        id={`company${jobId}`}
        name="company"
        value={job.company || ""}
        data-section="experience"
        onChange={(e) =>
          handleChange(e, "company")
        }
        required
      />
      <label htmlFor={`timeframe${jobId}`}>
        Timeframe:
      </label>
      <input
        type="text"
        id={`timeframe${jobId}`}
        name="timeframe"
        value={job.timeframe || ""}
        data-section="experience"
        onChange={(e) =>
          handleChange(e, "timeframe")
        }
        required
      />
      <label htmlFor={`jobDescription${jobId}`}>
        Job Description:
      </label>
      <textarea
        id={`jobDescription${jobId}`}
        name="jobDescription"
        value={job.jobDescription || ""}
        data-section="experience"
        onChange={(e) =>
          handleChange(e, "jobDescription")
        }
        rows="4"
        cols="50"
      />
      <button
        type="button"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
}
