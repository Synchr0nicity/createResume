export default function ExtraDetails({
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Extra information</h2>

      <label htmlFor="qualities">Qualities</label>
      <input
        type="text"
        id="qualities"
        name="qualities"
        value={
          formData.extraDetails.qualities || ""
        }
        data-section="extraDetails"
        onChange={handleChange}
        required
      />
      <label htmlFor="skills">Skills</label>
      <input
        type="text"
        id="skills"
        name="skills"
        value={formData.extraDetails.skills || ""}
        data-section="extraDetails"
        onChange={handleChange}
        required
      />
      <button type="submit">Next</button>
    </form>
  );
}
