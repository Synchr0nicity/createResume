export default function Experience({
  formData,
  handleChange,
  handleNext,
}) {
  return (
    <form>
      <h2>Work Experience</h2>

      <label htmlFor="role">Role</label>
      <input
        type="text"
        id="role"
        name="role"
        value={formData.role || ""}
        onChange={handleChange}
        required
      />
      <label htmlFor="company">Company:</label>
      <input
        type="text"
        id="company"
        name="company"
        value={formData.company || ""}
        onChange={handleChange}
        required
      />
      <label htmlFor="timeframe">
        Timeframe:
      </label>
      <input
        type="text"
        id="timeframe"
        name="timeframe"
        value={formData.timeframe || ""}
        onChange={handleChange}
        required
      />
      <label htmlFor="jobDescription">
        Job Description:
      </label>
      <textarea
        id="jobDescription"
        name="jobDescription"
        value={formData.jobDescription || ""}
        onChange={handleChange}
        rows="4"
        cols="50"
      />
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </form>
  );
}
