export default function CreateNewJobs({
  index,
  newJobs,
  setNewJobs,
}) {
  const jobData = newJobs[index] || {};

  function handleChange(e) {
    const { name, value } = e.target;
    setNewJobs((prevJobs) => {
      const updatedJobs = [...prevJobs];
      updatedJobs[index] = {
        ...updatedJobs[index],
        [name]: value,
      };
      return updatedJobs;
    });
  }

  return (
    <div key={index}>
      <label htmlFor={`role${index}`}>Role</label>
      <input
        type="text"
        id={`role${index}`}
        name="role"
        value={jobData.role || ""}
        data-section="experience"
        onChange={handleChange}
        required
      />
      <label htmlFor={`company${index}`}>
        Company:
      </label>
      <input
        type="text"
        id={`company${index}`}
        name="company"
        value={jobData.company || ""}
        data-section="experience"
        onChange={handleChange}
        required
      />
      <label htmlFor={`timeframe${index}`}>
        Timeframe:
      </label>
      <input
        type="text"
        id={`timeframe${index}`}
        name="timeframe"
        value={jobData.timeframe || ""}
        data-section="experience"
        onChange={handleChange}
        required
      />
      <label htmlFor={`jobDescription${index}`}>
        Job Description:
      </label>
      <textarea
        id={`jobDescription${index}`}
        name="jobDescription"
        value={jobData.jobDescription || ""}
        data-section="experience"
        onChange={handleChange}
        rows="4"
        cols="50"
      />
    </div>
  );
}
