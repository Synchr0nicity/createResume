import { useState, useRef } from "react";
import "/src/ResumeForm/ResumeForm.css";
import ResumeForm from "/src/ResumeForm/ResumeForm.jsx";
import Resume from "/src/ResumeRendered/Resume.jsx";
import html2pdf from "html2pdf.js";

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
        startDate: "",
        endDate: "",
        jobDescription: "",
      },
    },
    extraDetails: {
      qualities: [{ name: "" }],
      skills: [{ name: "" }],
    },
  });
  const [active, setActive] = useState(true);

  const contentRef = useRef(null);

  const generatePDF = () => {
    const element = contentRef.current;
    const opt = {
      filename: "my_resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "mm",
        format: [210, 297],
        orientation: "portrait",
      },
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="mainContainer">
      <a href="https://www.github.com/synchr0nicity">
        Generate a Resume by Synchr0nicity
      </a>
      {active && (
        <ResumeForm
          active={active}
          setActive={setActive}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      <Resume
        formData={formData}
        ref={contentRef}
      />
      {!active && (
        <div className="finalBtnsContainer">
          <button
            type="button"
            onClick={() => {
              setActive(
                (prevActive) =>
                  (prevActive = true)
              );
            }}
            id="editBtn"
          >
            <i className="fas fa-edit" />
            Edit Resume
          </button>
          <button
            type="button"
            onClick={generatePDF}
            id="pdfBtn"
          >
            <i className="fas fa-download" />
            Download as PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
