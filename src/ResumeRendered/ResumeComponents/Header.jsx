export default function Header({ formData }) {
  return (
    <header>
      <h1>
        <span className="symbols">&lt;</span>
        CV
        <span className="symbols">&gt;</span>
      </h1>
      <div className="largeContainer">
        <section className="personalDetailsSection">
          <div className="miniContainer">
            <h2>
              {formData.personalInformation
                ?.name || "John Foreman"}
            </h2>
            <p>
              {formData.personalInformation
                ?.currentJob || "Forklift Driver"}
            </p>
          </div>

          <h4>
            <span className="symbols">/</span>
            Summary
          </h4>
          <p>
            {" "}
            {formData.personalInformation
              ?.summary ||
              "Skilled forklift driver adept at working quickly in fast-paced, demanding environments. Strong team player and problem-solver. Offering top communication and conflict resolution skills as well as a comprehensive background in shipping and receiving."}
          </p>
        </section>
        <section className="contactDetailsSection">
          <div className="contactDetails">
            <h3>
              <span className="symbols">/</span>
              Contact Details:
            </h3>
            <p>
              {formData.contactDetails?.gitHub ||
                "https://www.facebook.com/john-foreman"}
            </p>
            <p>
              {formData.contactDetails?.email ||
                "johnF18@gmail.com"}
            </p>
            <p>
              {formData.contactDetails
                ?.whatsapp || "+306784590045"}
            </p>
            <p>
              {formData.contactDetails?.address ||
                "Las Vegas, Henderson"}
            </p>
          </div>
        </section>
      </div>
    </header>
  );
}
