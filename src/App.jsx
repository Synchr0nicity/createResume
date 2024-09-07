import { useState } from "react";
import "./App.css";
import ResumeForm from "/src/ResumeForm/ResumeForm.jsx";
import Resume from "/src/ResumeRendered/Resume.jsx";

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
    projects: {
      0: {
        project: "",
        languages: "",
        projectDescription: "",
      },
    },
    jobs: {
      0: {
        role: "",
        company: "",
        timeframe: "",
        jobDescription: "",
      },
    },
    extraDetails: {
      qualities: [{ name: "" }],
      skills: [{ name: "" }],
    },
  });
  const [active, setActive] = useState(true);

  return (
    <div className="mainContainer">
      {active && (
        <ResumeForm
          active={active}
          setActive={setActive}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      <Resume formData={formData} />
      {!active && (
        <button
          type="button"
          onClick={() => {
            setActive(
              (prevActive) => (prevActive = true)
            );
          }}
          id="editBtn"
        >
          Edit Resume
        </button>
      )}
    </div>
  );
}

export default App;
