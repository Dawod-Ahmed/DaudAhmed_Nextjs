import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay={1}
        isOpen={isOpen}
        videoId="LXb3EKWsInQ"
        onClose={() => setOpen(false)}
      />
      <section className={`video-section w-100 `}>
        <button
          type="button"
          className="model-opening-icon"
          onClick={() => setOpen(true)}
        ></button>
      </section>
    </>
  );
};

export default VideoSection;

// <------------------------->

// import React, { useState } from "react";
// import { VideoPosterImage } from "../../../assets/assets";
// import { Player, BigPlayButton } from "video-react";
// import "video-react/dist/video-react";
// const VideoSection = () => {
//   // const [playBtnPosition, setPlayBtnPosition] = useState("");
//   const [muteVideo, setmuteVideo] = useState(true);
//   const [videoBackLayer, setVideoBackLayer] = useState(false);
//   // const hidePlaybtn = () => {
//   //   setPlayBtnPosition("video-secton-play-btn");
//   //   console.log(setPlayBtnPosition);
//   // };
//   const closeVideo = () => {
//     setmuteVideo(!muteVideo);
//     // console.log(muteVideo);
//     setVideoBackLayer(!videoBackLayer);
//   };

//   return (
//     <>
//       <section className={`video-section w-100 `}>
//         <button
//           type="button"
//           className="model-opening-icon"
//           data-bs-toggle="modal"
//           data-bs-target="#exampleModal"
//           data-bs-whatever="@mdo"
//           onClick={closeVideo}
//         ></button>
//       </section>
//       <div
//         className={`${
//           videoBackLayer ? "d-block" : "d-none"
//         }  video-back-layer position-fixed w-100`}
//         onClick={closeVideo}
//       ></div>
//       <div
//         className={`modal-dialog ${videoBackLayer ? "d- flex" : "d-none"}`}
//         id="exampleModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-content d-flex flex-column flex-lg-row ">
//           <div className="modal-header pt-0 mt-0 mt-sm-3 mt-lg-0">
//             <button
//               type="button"
//               className="btn-close   fw-bold mt-0 py-4"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//               onClick={closeVideo}
//             ></button>
//           </div>
//           <div className="modal-body p-0 d-flex justify-content-center align-items-center">
//             <Player
//               playsInline
//               poster={VideoPosterImage}
//               src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
//               autoPlay={true}
//               muted={muteVideo}
//             >
//               <BigPlayButton position="center" />
//             </Player>
//           </div>
//         </div>
//         {/* </div> */}
//       </div>

//       {/* <Player playsInline poster={VideoPosterImage} src="dsdsd">
//         <BigPlayButton position="center" />
//       </Player> */}
//       {/* <div
//         className={`modal fade ${videoBackLayer ? "d-block" : "d-none"}`}
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       > */}
//     </>
//   );
// };

// export default VideoSection;
