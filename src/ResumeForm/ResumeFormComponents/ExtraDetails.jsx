export default function ExtraDetails({
  formData,
  handleChange,
  handleNext,
}) {
  return (
    <form>
      <h2>Extra information</h2>

      <label htmlFor="qualities">Qualities</label>
      <input
        type="text"
        id="qualities"
        name="qualities"
        value={formData.qualities || ""}
        onChange={handleChange}
        required
      />
      <label htmlFor="skills">Skills</label>
      <input
        type="text"
        id="skills"
        name="skills"
        value={formData.skills || ""}
        onChange={handleChange}
        required
      />
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </form>
  );
}
