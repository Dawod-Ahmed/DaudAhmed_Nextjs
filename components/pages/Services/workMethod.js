import { HandleProject } from "../../common";

const WorkMethod = () => {
  return (
    <>
      <section className="work-method-section pb-5">
        <div className="project-cycle-heading-parent">
          <h1 className="heading my-5 text-center">
            <span className="heading-first">Project</span>
            <br />
            <span className="heading-second">Cycle</span>
          </h1>
          <p className="general-text project-cycle-para text-center">
            I develop every solution with proffesional work system and under
            agile methodologies!
          </p>
        </div>
        <div className="project-cycle-container">
          <HandleProject
            className="requirements"
            phaseTitle1="1. Understanding Of"
            phaseTitle2="Requirements"
            phaseDetail=" Gathering Data & Understanding Your Requirements."
          />
          <HandleProject
            className="development"
            phaseTitle1="2. Development And"
            phaseTitle2=" Updates"
            phaseDetail="Start Development  & Give You Updates on Project Progress  on Daily Basis"
          />
          <HandleProject
            className="testing"
            phaseTitle1="3. Test Your"
            phaseTitle2="Project"
            phaseDetail="Test Your Project To check ( On All Major Browsers, All devices' compatibility, Back-End Tests, Bugs-Free Project) to Ensure Quality Work."
          />
          <HandleProject
            className="deliver"
            phaseTitle1="4. Deliver Your"
            phaseTitle2="Project"
            phaseDetail="Give Project for Review & Deliver Your Project.
            "
          />
        </div>
      </section>
    </>
  );
};

export default WorkMethod;
