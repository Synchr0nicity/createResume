export default function PersonalInformation({
  formData,
  handleChange,
  handleNext,
}) {
  return (
    <form>
      <h2>Personal Information</h2>

      <label htmlFor="name">Full Name:</label>
      {/* {!isValid && (
        <p>
          Input must be more than 4 characters.
        </p>
      )} */}
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name || ""}
        onChange={handleChange}
        required
      />
      <label htmlFor="currentJob">
        Current Job Title:
      </label>
      <input
        type="text"
        id="currentJob"
        name="currentJob"
        value={formData.currentJob || ""}
        onChange={handleChange}
        required
      />
      <label htmlFor="website">Website:</label>
      <input
        type="text"
        id="website"
        name="website"
        value={formData.website || ""}
        onChange={handleChange}
      />
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </form>
  );
}
