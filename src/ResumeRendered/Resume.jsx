import "/src/ResumeRendered/Resume.css";
export default function Resume({ formData }) {
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
    <div className="resumeContainer shadow">
      <div className="resumeMargin">
        <NumberList number={24} />
      </div>
      <div className="resumeContent">
        <main>
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
                    ?.currentJob ||
                    "Forklift Driver"}
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
                <h3>Contact Details:</h3>
                <p>
                  {formData.contactDetails
                    ?.gitHub ||
                    "https://www.facebook.com/john-foreman"}
                </p>
                <p>
                  {formData.contactDetails
                    ?.email ||
                    "johnF18@gmail.com"}
                </p>
                <p>
                  {formData.contactDetails
                    ?.whatsapp || "+306784590045"}
                </p>
                <p>
                  {formData.contactDetails
                    ?.address ||
                    "Las Vegas, Henderson"}
                </p>
              </div>
            </section>
          </div>
          <section className="projectSection">
            <h4>
              <span className="symbols">/</span>
              Projects and Applications
            </h4>
            <div className="projectsContainer">
              {Object.keys(formData.projects).map(
                (key) => {
                  const project =
                    formData.projects[key];
                  return (
                    <div
                      className="projectBox"
                      key={key}
                    >
                      <h3>
                        {project.project ||
                          "Tic Tac Toe game"}
                      </h3>
                      <p>
                        {project.languages ||
                          "Html && CSS"}
                      </p>
                      <p>
                        {project.projectDescription ||
                          "Play tic tac toe- two players X and O compete to get 3 consecutive placements of their symbol on the board to win."}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </section>
          <section className="experienceSection">
            <h4>
              <span className="symbols">/</span>
              Work Experience
            </h4>
            <div className="experienceContainer">
              {Object.keys(formData.jobs).map(
                (key) => {
                  const job = formData.jobs[key];
                  return (
                    <div
                      key={key}
                      className="experienceBox"
                    >
                      <p>
                        {job.company ||
                          "DTL Supply Chain"}
                      </p>
                      <div className="miniContainer">
                        <h3>
                          {job.role ||
                            "Forklift Driver"}
                        </h3>

                        <small>
                          {job.timeframe ||
                            "3/2023-4/2024"}
                        </small>
                      </div>
                      <p>
                        {job.jobDescription ||
                          "responsible for moving goods around warehouses or other industrial sites. They do this by using a forklift to unload deliveries from trucks and stack boxes for storage purposes throughout a warehouse and other industrial property."}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </section>
        </main>
        <footer>
          <section className="extraDetailsSection">
            <div className="qualitiesContainer">
              <h4>
                <span className="symbols">/</span>
                Qualities
              </h4>
              <ul className="qualitiesListContainer">
                {formData.extraDetails.qualities.map(
                  (quality, index) => {
                    return (
                      <li key={index}>
                        {quality.name ||
                          "Hard working"}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
            <div className="skillsContainer">
              <h4>
                <span className="symbols">/</span>
                Skills
              </h4>
              <ul className="skillsListContainer">
                {formData.extraDetails.skills.map(
                  (skill, index) => {
                    return (
                      <li key={index}>
                        {skill.name ||
                          "Forklift Driver's license, type 2."}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}
/*
Dominic Nathaniel Abbott
Partner Success (Business to Business) -contact details below
github: https://github.com/Synchr0nicity
/summary
Among other positions, I have done technical jobs fixing applications, taken care of data input, and have
extensive knowledge of many industries. I have worked on Projects, managed teams, and used CRM-like
systems, salesforce, Office suite, and many others. Now, I am headed into the software engineering world, and
have completed web projects and courses with Javascript, HTML & CSS, and some SQL.
/projects and applications
Mapty
Javascript && CSS && HTML
An App that allows the user to show
on a map where they performed a
workout, like running or cycling,
keeping track of details like when,
how far, etc. The workouts are stored
in the sidebar, and can be deleted.
When the user clicks on a workout,
the map will pan over to the workout
pin.
Bankist
Javascript && CSS && HTML
A "banking" app that allows for
storing user profile log in details, with
different features including a transfer
option from one account to the other,
request a loan feature, and more.
2048
Javascript && CSS && HTML
A game that requires the user to
move numbers left, right, up or down
using the arrow keys to add up to
2048. The game follows game logic,
object oriented programming with
classes, and even uses private
variables.
Pig-Game
Javascript && CSS && HTML
A game where two players must
compete by rolling a virtual die and
gain score, and lose it depending on
the roll.
Guess My Number
Javascript && CSS && HTML
A game where the user must guess
the hidden number in the alloted
guesses, or start again. The
highscore can be saved.
This CV
Javascript && CSS && HTML
This entire CV was coded by me, to
look like a code editor to showcase
my creativity, and effort to learn
programming. You can head to my
github where you can see the code
and can click any project to see them
functioning.
/work experience
2/20/24, 12:17 AM Document
127.0.0.1:5500/CV/index.html 2/2

(Partner Sucess) - Current Role
Zizoo Boats CURRENT
I have contributed to the company's success over the
past two years by overseeing and managing key
aspects of its infrastructure. From the business to
business team acquiring new partners, onboarding
them to our company, and assisting the continued
relationship, to managing a team of generalists taking
care of business to business, customer relations, and
crisis management, my time has been one of
responsibility in varying degrees and a huge learning
curve.
(Technical Specialist)
Dropbox 2020-2021
Worked emails and calls with clients screen sharing to
solve various technical problems to various degrees of
difficulty. Learned the ins and outs of a CRM system
and had hands on experience with the product, using
virtual machines to simulate and recreate bugs.
(Support Worker)
SILC 2018-2019
Specially trained to assist the living condition of
individuals with varying degrees of intense mental and
physical disabilities. Had the responsibilty for almost a
year of 4 high-needs individuals cooking, cleaning,
bringing them on excursions and administering
medication.
Child-support Collections Agent
Inland Revenue 2017
Responsibilities included: managing and logging client
data, using data and empathy to make judgment calls
on a client to client basis, outbound calls and emails to
chase up old and new situations.
/Qualities
Growth-mindset
Hard-work and perseverence
Endless energy
Problem-solving skills
Quick thinker
/Contact Details
gitHub:
https://github.com/Synchr0nicity
Email:
dominicnabbott@gmail.com
Whatsapp: +306979569583
Address: Athens, Greece (US
Citizen)
/knowledge
OOP: object oriented
programming
Funtions, Methods,
and Objects
Operator
Precedence
Template Literals Type Coercion Logical Operators
Javascript ES6 Arrays Loops
VS Code GitHub Debugging
DOM manipulation Code refactoring The call Stack
The Scope Chain the This keyword Destructuring
The Spread Operator Event Propagation Event Delegation
Classes Setters and Getters The Prototype Chain
Encapsulation Flow-chart Project Architecture
Asynchronous
Javascript
AJAX calls Promises
Modules Command Line CLEAN CODE
API Libraries Algorithms
*/
