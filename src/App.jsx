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
    extraDetails: {
      qualities: "",
      skills: "",
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
