export default function ContactDetails({
  formData,
  handleChange,
  handleSubmit,
  handlePrevious,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="contactDetailsForm"
    >
      <h2>Contact Details</h2>
      <input
        type="url"
        id="gitHub"
        name="gitHub"
        value={
          formData.contactDetails.gitHub || ""
        }
        data-section="contactDetails"
        onChange={handleChange}
        placeholder="https://www.website.com"
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        value={
          formData.contactDetails.email || ""
        }
        data-section="contactDetails"
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        id="whatsapp"
        name="whatsapp"
        value={
          formData.contactDetails.whatsapp || ""
        }
        data-section="contactDetails"
        onChange={handleChange}
        placeholder="Whatsapp"
        required
      />
      <input
        type="text"
        id="address"
        name="address"
        value={
          formData.contactDetails.address || ""
        }
        data-section="contactDetails"
        onChange={handleChange}
        placeholder="Address"
      />
      <div className="btnContainer">
        <button
          type="button"
          onClick={handlePrevious}
        >
          Back
        </button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
}
