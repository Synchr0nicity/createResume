export default function ContactDetails({
  formData,
  handleChange,
  setActive,
  active,
  handlePrevious,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "congratulations, you completed your resume."
    );
    setActive(
      (prevActive) => (prevActive = false)
    );
    console.log(formData);
    // Add logic to handle form submission, such as generating a resume
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Details</h2>
      <label htmlFor="gitHub">Github:</label>
      <input
        type="url"
        id="gitHub"
        name="gitHub"
        value={
          formData.contactDetails.gitHub || ""
        }
        data-section="contactDetails"
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={
          formData.contactDetails.email || ""
        }
        data-section="contactDetails"
        onChange={handleChange}
        required
      />
      <label htmlFor="whatsapp">Whatsapp:</label>
      <input
        type="text"
        id="whatsapp"
        name="whatsapp"
        value={
          formData.contactDetails.whatsapp || ""
        }
        data-section="contactDetails"
        onChange={handleChange}
        required
      />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={
          formData.contactDetails.address || ""
        }
        data-section="contactDetails"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handlePrevious}
      >
        Back
      </button>
      <button type="submit">Finalize</button>
    </form>
  );
}
