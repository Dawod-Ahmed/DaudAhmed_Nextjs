import React, { useLayoutEffect, useState } from "react";
import HeaderComp from "./header";
import Headroom from "react-headroom";

const Header = () => {
  const [headroom, setHeadroom] = useState(false);
  useLayoutEffect(() => {
    function handleWindowResize() {
      window.innerWidth < 992 ? setHeadroom(true) : setHeadroom(false);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  
  return headroom ? (
    <Headroom>
      <HeaderComp />
    </Headroom>
  ) : (
    <HeaderComp />
  );
};

export default Header;
