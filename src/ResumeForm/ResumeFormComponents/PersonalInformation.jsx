export default function PersonalInformation({
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
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
        value={
          formData.personalInformation.name || ""
        }
        data-section="personalInformation"
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
        value={
          formData.personalInformation
            .currentJob || ""
        }
        data-section="personalInformation"
        onChange={handleChange}
        required
      />
      <label htmlFor="website">Website:</label>
      <input
        type="text"
        id="website"
        name="website"
        value={
          formData.personalInformation.website ||
          ""
        }
        data-section="personalInformation"
        onChange={handleChange}
      />
      <label htmlFor="summary">Summary:</label>
      <textarea
        id="summary"
        name="summary"
        value={
          formData.personalInformation.summary ||
          ""
        }
        data-section="personalInformation"
        onChange={handleChange}
        rows="4" // Adjust the number of visible rows
        cols="50" // Adjust the width in characters
        required
      />
      <button type="submit">Next</button>
    </form>
  );
}
