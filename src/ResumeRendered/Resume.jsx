import "/src/ResumeRendered/Resume.css";
import { forwardRef } from "react";
import Header from "/src/ResumeRendered/ResumeComponents/Header.jsx";
import ProjectsSection from "/src/ResumeRendered/ResumeComponents/ProjectsSection.jsx";
import ExperienceSection from "/src/ResumeRendered/ResumeComponents/ExperienceSection.jsx";
import ExtraDetailsSection from "/src/ResumeRendered/ResumeComponents/ExtraDetailsSection.jsx";

const Resume = forwardRef(({ formData }, ref) => {
  const NumberList = ({ number }) => {
    const numbers = Array.from(
      { length: number },
      (_, i) => i + 1
    );

    return (
      <div className="number-list">
        {numbers.map((number) => (
          <span key={number}>{number}</span>
        ))}
      </div>
    );
  };

  return (
    <div
      ref={ref}
      className="resumeContainer shadow"
    >
      <div className="resumeMargin">
        <NumberList number={30} />
      </div>
      <div className="resumeContent">
        <main>
          <Header formData={formData} />
          <ProjectsSection formData={formData} />
          <ExperienceSection
            formData={formData}
          />
        </main>
        <footer>
          <ExtraDetailsSection
            formData={formData}
          />
        </footer>
      </div>
    </div>
  );
});

export default Resume;
