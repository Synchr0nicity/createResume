import { useState } from "react";
import "./App.css";
import ResumeForm from "/src/ResumeForm/ResumeForm.jsx";

function App() {
  const [formData, setFormData] = useState({
    personalInformation: {
      name: "",
      currentJob: "",
      website: "",
      summary: "",
    },
    contactDetails: {
      gitHub: "",
      email: "",
      whatsapp: "",
      address: "",
    },
  });
  const [active, setActive] = useState(true);

  return (
    <>
      <h1>&lt;CV&gt;</h1>
      <h2>
        {formData.personalInformation?.name ||
          "John Smith"}
      </h2>
      <h3>
        {formData.personalInformation
          ?.currentJob || "Forklift Driver"}
        <span>-Contact details below</span>
      </h3>
      <h3>
        {formData.personalInformation?.website ||
          "https://johndoe.com"}
      </h3>
      <h3>
        <span>/</span>Summary
      </h3>
      <p>
        {" "}
        {formData.personalInformation?.summary ||
          "We don't only drive forklifts, we can mow your lawns, and install irrigation to! Don't hesitate to call us for all your bluecollar needs!"}
      </p>
      <h3>
        <span>/</span>Projects and Applications
      </h3>
      <div className="projectBox">
        <h1>
          {" "}
          {formData.projects?.map((project) => {
            return project.project;
          }) || "Example Project"}
        </h1>
        <h3></h3>
        <p></p>
      </div>
      {active && (
        <ResumeForm
          active={active}
          setActive={setActive}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </>
  );
}

export default App;
