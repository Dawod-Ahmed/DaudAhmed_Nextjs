import ExperienceCard from "../../common/experienceCard";
const ExperienceSection = () => {
  return (
    <>
      <section className="experience-section d-flex  flex-column justify-content-center align-items-center position-relative">
        <h1 className="heading experience-heading  my-5">
          <span className="heading-first">Experiance &</span>
          <br />
          <span className="heading-second">Education</span>
        </h1>
        <div className="experience-cards-parent  d-flex  mt-5">
          <ExperienceCard
            title={"Cipher Savvy"}
            location={"2021-2022"}
            detail={"Web Development"}
            duration={
              "worked at Cipher Savvy as a Web Developer here I put my expertise into developing web development projects and learned how important it is to give the best User Interface & User Experience to website visitors."
            }
          />
          <ExperienceCard
            title={"Online Resources"}
            location={"2020-2023"}
            detail={"Web Design & Development"}
            duration={
              "I completed the best web development courses made by Code with Mosh, Code with Harry, and Thapa Technical, as well as many other valuable lectures from the official documentation. I am also updating my skills regularly to compete and meet new demands."
            }
          />
          <ExperienceCard
            title={"ZCCA Computer Institute"}
            location={"2018-2020"}
            detail={"Software Development"}
            duration={
              " During the fantastic  Journey in this institute, I learned many techs & tools, including Graphics Designing in Photoshop and MS Excel and in-depth knowledge of Web Designing and Developing."
            }
          />
          <ExperienceCard
            title={"Superior Group of Colleges"}
            location={"2016-2018"}
            detail={"Computer science"}
            duration={
              "In this institute, I Learned about software development and knowledge of computer hardware to know how computers work inside the machine."
            }
          />
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
