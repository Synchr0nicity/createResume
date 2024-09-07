export default function PersonalInformation({
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="personalDetailsForm"
    >
      <h2>Personal Information</h2>
      <input
        type="text"
        id="name"
        name="name"
        value={
          formData.personalInformation.name || ""
        }
        data-section="personalInformation"
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
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
        placeholder="Current Job Title"
        required
      />
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
        placeholder="Personal Summary"
        required
      />
      <button type="submit">Next</button>
    </form>
  );
}
