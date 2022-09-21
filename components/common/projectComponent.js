import React, { useState } from "react";

import Image from "next/image";
import ModalVideo from "react-modal-video";

const ProjectComponent = (props) => {
  const {
    image,
    projectTitle1,
    projectTitle2,
    projectDetails,
    leftImage,
    liveLink,
   
  } = props;
  const [isOpen, setOpen] = useState(false);
 
 const openModalFun=()=> {
  if(liveLink==="newsapp"){
    setOpen(true);

  }
//  console.log("Testing---1");
//  document.getElementsByClassName("bh-widget-page-wrapper")[0].sty

 }


  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay={1}
        isOpen={isOpen}
        videoId="DlEDOT3CJaE"
        onClose={() => setOpen(false)}
      />

      {leftImage ? (
        <>
          <div id={liveLink==="newsapp"? "#videoMoadal" : null} className="project-parent py-5">
            <a href={liveLink==="newsapp"? "#videoMoadal" : liveLink} className="project-img-parent text-decoration-none"  onClick={() => {
                         openModalFun();
                      }}>
              <div className="project-img img-fluid position-relative">
                <Image
                  src={image}
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left top"
                  placeholder="blur"
                  blurDataURL={image}
                />
              </div>
            </a>
            <div className="projet-detail-parent mt-5 mt-lg-0">
              <h2 className="project-name">
                <span className="heading-first project-name-first">
                  {`${projectTitle1}`}
                </span>
                <span className="heading-second project-name-second">
                  {` ${projectTitle2}`}
                </span>
              </h2>
              <p className="project-details mt-2">{projectDetails}</p>
              <div className="btn-parent mt-3">
                {liveLink === "newsapp" ? (
                  <>
                    {" "}
                    <button
                      className="btn btn-explore"
                      onClick={() => {
                         openModalFun();
                      }}
                    >
                      Preview
                    </button>
                  </>
                ) : (
                  <>
                    {" "}
                    <a href={liveLink} className="btn btn-explore">
                      Preview
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id={liveLink==="newsapp"? "#videoMoadal" : null} className="project-parent py-5 second-opposite-element">
            <div className="projet-detail-parent mt-5 mt-lg-0">
              <h2 className="project-name">
                <span className="heading-first project-name-first">
                  {`${projectTitle1}`}
                </span>
                <span className="heading-second project-name-second">
                  {` ${projectTitle2}`}
                </span>
              </h2>
              <p className="project-details mt-2">{projectDetails}</p>
              <div className="btn-parent mt-3">
              {liveLink === "newsapp" ? (
                  <>
                    {" "}
                    <button
                      className="btn btn-explore"
                      onClick={() => {
                        openModalFun();
                      }}
                    >
                      Preview
                    </button>
                  </>
                ) : (
                  <>
                    {" "}
                    <a href={liveLink} className="btn btn-explore">
                      Preview
                    </a>
                  </>
                )}
              </div>
            </div>
            <a href={liveLink==="newsapp"? "#videoMoadal" : liveLink} className="project-img-parent text-decoration-none">
              <div className="project-img img-fluid position-relative">
                <Image
                  src={image}
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left top"
                  placeholder="blur"
                  blurDataURL={image}
                />
              </div>
            </a>
          </div>
          <style global jsx>{`
       body .bh-widget-page-wrapper {

${isOpen ? "visibility: hidden!important;" : null}
      `}</style>
        </>
      )}
    </>
  );
};

export default ProjectComponent;
