import React from "react";

const backgroundShapes = (props) => {
  const { className } = props;
  return (
    <>
      <img src={props.image} alt="img" className={className} />
    </>
  );
};

export default backgroundShapes;
