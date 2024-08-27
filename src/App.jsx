import { useState } from "react";
import "./App.css";
import ResumeForm from "/src/ResumeForm/ResumeForm.jsx";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    currentJob: "",
    website: "",
    summary: "",
    role: "",
    company: "",
    timeframe: "",
    jobDescription: "",
    qualities: "",
    contactDetails: "",
    skills: "",
    gitHub: "",
    email: "",
    whatsapp: "",
    address: "",
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
