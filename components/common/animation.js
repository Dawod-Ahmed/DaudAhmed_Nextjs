import Lottie from "react-lottie";

const Animation = (props) => {
  const { src = null } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: src,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} />;
};

export default Animation;
