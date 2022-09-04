import React, { useLayoutEffect } from "react";
import {
  Github,
  Facebook,
  Linkdin,
  Whatsapp,
  ScrollTopArrow,
} from "../../../assets";

const Footer = () => {
  const scrolltotop = () => {
    window.scrollTo(0, 0);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", function () {
      var scroll = document.querySelector(".scrollBar-Top");
      scroll.classList.toggle("active-scrollToTop", window.scrollY > 250);
    });
    return () => {
      window.removeEventListener("scroll", function () {
        var scroll = document.querySelector(".scrollBar-Top");
        scroll.classList.toggle("active-scrollToTop", window.scrollY > 250);
      });
    };
  }, []);

  return (
    <>
      <footer className="d-flex flex-column  align-items-center justify-content-center footer w-100 mx-auto mt-0 py-5 ">
        <span className="created-text mb-1">Designed and developed by</span>
        <h1 className="website-creator text-white">
          Dawood<span className="footer-slash mx-1">/</span>A
        </h1>

        {/* <div className="footer-icon-parent d-flex align-items-center justify-content-center py-4"> */}
        <div className="footer-icon-parent d-flex align-items-center justify-content-between py-4">
          {socialLinks.map(({ href, className, img }, index) => (
            <a
              key={index + className}
              href={href}
              target="_blank"
              className={`footer-icon d-flex align-items-center justify-content-center mx-3 ${className}`}
            >
              <img src={img} alt="img" className="footer-icon-img w-50 h-50" />
            </a>
          ))}
        </div>
        <p className="copyrights-text general-text">
          &copy; {new Date().getFullYear().toString()} All Rights Reserved
        </p>
        <div
          className="scrollBar-Top position-fixed d-none justify-content-center align-items-center"
          onClick={scrolltotop}
        >
          <img
            src={ScrollTopArrow.src}
            alt="img"
            className="scrollTop-Arrow"
            onClick={scrolltotop}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;

let socialLinks = [
  {
    href: "https://github.com/Dawod-Ahmed",
    className: "github",
    img: Github.src,
  },
  {
    href: "https://www.facebook.com/profile.php?id=100066460706518",
    className: "facebook",
    img: Facebook.src,
  },
  {
    href: "https://www.linkedin.com/in/daud-ahmed-webdev/",
    className: "linkdin",
    img: Linkdin.src,
  },
  {
    href: "https://wa.me/+971521996785?text=Greetings Daud Ahmed, I need a quote!",
    className: "whatsapp",
    img: Whatsapp.src,
  },
];
