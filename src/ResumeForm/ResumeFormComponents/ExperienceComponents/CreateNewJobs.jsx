export default function CreateNewJobs({
  jobId,
  job,
  handleChange,
  handleRemove,
  handleAdd,
}) {
  return (
    <div key={jobId}>
      <input
        type="text"
        id={`role${jobId}`}
        name="role"
        value={job.role || ""}
        data-section="experience"
        onChange={(e) => handleChange(e, "role")}
        placeholder="Role"
        required
      />
      <input
        type="text"
        id={`company${jobId}`}
        name="company"
        value={job.company || ""}
        data-section="experience"
        onChange={(e) =>
          handleChange(e, "company")
        }
        placeholder="Company"
        required
      />
      <input
        type="date"
        id={`startDate${jobId}`}
        name="startDate"
        value={job.startDate || ""}
        data-section="experience"
        onChange={(e) =>
          handleChange(e, "startDate")
        }
        placeholder="Start Date"
        required
      />
      <input
        type="date"
        id={`endDate${jobId}`}
        name="endDate"
        value={job.endDate || ""}
        data-section="experience"
        onChange={(e) =>
          handleChange(e, "endDate")
        }
        placeholder="End Date"
        required
      />
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
        placeholder="Job Description"
      />
      <div className="btnContainer">
        <img
          src="/icons8-remove-32 (1).png"
          type="button"
          onClick={handleRemove}
        />
        <img
          src="/icons8-add-32 (1).png"
          type="button"
          onClick={handleAdd}
        />
      </div>
    </div>
  );
}
