export default function Summary({
  formData,
  handleChange,
  handleNext,
}) {
  return (
    <form>
      <label htmlFor="summary">Summary:</label>
      <textarea
        id="summary"
        name="summary"
        value={formData.summary || ""}
        onChange={handleChange}
        rows="4" // Adjust the number of visible rows
        cols="50" // Adjust the width in characters
      />
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </form>
  );
}
