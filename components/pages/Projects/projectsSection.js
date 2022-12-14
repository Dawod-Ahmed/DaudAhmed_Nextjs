import { useState } from "react";
// import ModalVideo from "react-modal-video";
 
import {

  portfolio,
  project01,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
} from "../../../assets";
 
import { ProjectComponent } from "../../common";
const ProjectsSection = () => {
  // const [isOpen, setOpen] = useState(false);
//  const openModalFun=(value)=> {
// if(value){
//  console.log("Testing---1",value);
// }

//  }
  const [projectData] = useState([
    {
      image: portfolio,
      title1: "Personal ",
      title2: "Portfolio",
      projectDetails:
        "My Personal Portfolio website developed in Next.Js.This is designed with completely custom UI/UX web design.",
      liveLink: "https://daudahmed.com/",
    },
    {
      image: project01,
      title1: "RFG ",
      title2: "Logistics",
      projectDetails:
        "A Logistics company based in Dubai, UAE. Who is providing the Door-Door Logistics solutions in GCC countries",
      liveLink: "https://rfgroup.ae/",
    },
    {
      image: project1,
      title1: "BroadBand ",
      title2: "Genie",
      projectDetails:
        "A UK-Based BroadBand Genie,the internet service provider company landing page and developed in Gatsby.Js.",
      liveLink: "https://broadband-genie-uk.vercel.app/",
    },
    {
      image: project2,
      title1: "Play",
      title2: "Pluniverse",
      projectDetails:
        "This is NFT Crypto based and pluniverse game landing page developed in React.Js and Bootstrap.",
      liveLink: "https://playpluniverse.vercel.app/",
    },
    {
      image: project3,
      title1: "News",
      title2: "App",
      projectDetails:
        "A International news web app and with the feature of specific countries lastest news  and developed in React.Js.",
      liveLink: "newsapp",
    },
    {
      image: project4,
      title1: "Law",
      title2: "On Demand",
      projectDetails:
        "This is US Law Based landing page to introduce their Law On Demand IOS and android Mobile App,this website is developed in Gatsby.Js.",
      liveLink: "https://lawondemand.vercel.app/",
    },
    {
      image: project5,
      title1: "Admin",
      title2: "Panel",
      projectDetails:
        "This is US Law Based Web Applicatin admin panel to manage their Law On Demand mobile app user details,this web application is developed in React.Js and Bootstrap.",
      liveLink: "https://law-on-demand-admin-panel.vercel.app/login",
    },

    {
      image: project6,
      title1: "Dubai",
      title2: "Center",
      projectDetails:
        "A landing page to online introdcue the Dubai Center video games business,this is developed in HTML,JS,Bootstrap and with Jquery.",
      liveLink: "https://dubaicenter.vercel.app/",
    },
    {
      image: project7,
      title1: "Sigma",
      title2: "Sol",
      projectDetails:
        "An IT Service provider company website based in UK,this is developed with collaboration and in HTML,JS,Bootstrap and with Jquery.",
      liveLink: "https://sigma-sol.vercel.app/",
    },
  ]);


  return (
    <>
     
 

      <section className="projects-section mt-5">
        {projectData.map((value, index) => {
          return (
            <ProjectComponent
              key={index}
              image={value.image.src}
              projectTitle1={value.title1}
              projectTitle2={value.title2}
              projectDetails={value.projectDetails}
              leftImage={index % 2 === 0 ? true : false}
              liveLink={value.liveLink}
            
            />
          );
        })}
      </section>
      
    </>
  );
};

export default ProjectsSection;
