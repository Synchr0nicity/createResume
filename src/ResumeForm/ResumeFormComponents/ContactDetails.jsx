export default function ContactDetails({
  formData,
  handleChange,
  setActive,
  active,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "congratulations, you completed your resume."
    );
    setActive((active = false));
    console.log(formData);
    // Add logic to handle form submission, such as generating a resume
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Details</h2>
      <label htmlFor="gitHub">Github:</label>
      <input
        type="text"
        id="gitHub"
        name="gitHub"
        value={formData.gitHub || ""}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={formData.email || ""}
        onChange={handleChange}
        required
      />
      <label htmlFor="whatsapp">Whatsapp:</label>
      <input
        type="text"
        id="whatsapp"
        name="whatsapp"
        value={formData.whatsapp || ""}
        onChange={handleChange}
        required
      />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address || ""}
        onChange={handleChange}
        required
      />
      <button type="submit">Finalize</button>
    </form>
  );
}
