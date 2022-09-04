import Image from "next/image";
const ProjectComponent = (props) => {
  const {
    image,
    projectTitle1,
    projectTitle2,
    projectDetails,
    leftImage,
    liveLink,
  } = props;
  return (
    <>
      {leftImage ? (
        <>
          <div className="project-parent py-5">
            <a href="" className="project-img-parent text-decoration-none">
              <div className="project-img img-fluid position-relative">
                <Image
                  src={image}
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left top"
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
                <a href={liveLink} className="btn btn-explore">
                  Preview
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="project-parent py-5 second-opposite-element">
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
                <a href={liveLink} className="btn btn-explore">
                  Preview
                </a>
              </div>
            </div>
            <a href="" className="project-img-parent text-decoration-none">
              <div className="project-img img-fluid position-relative">
                <Image
                  src={image}
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left top"
                />
              </div>
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectComponent;
