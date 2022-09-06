import React from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import {
  FaqsDesktopView,
  FaqsMobileView,
  
} from "../../../assets";
import { Accordion } from "../../common";
const Faqs = () => {
  return <>
  <section className="accordion-section  py-5">
    <div className="faq-heading-parent   ">
      <h1 className="faq-headingg">
        <span className=" heading-first">FAQ</span>
        <span className=" heading-second">&apos;S</span>
      </h1>
      <p className="faqs-para general-text text-center">
        To save your valuable time I mentioned some frequently ask questions, let&apos;s check if you have any one of these or contact me, I will reply to your query within one hour,sounds great let&apos;s connect with me!
      </p>
    </div>

    <div className="faq-accordion-image-parent   w-100 flex-column flex-lg-row align-items-center align-items-lg-start">
      <MouseParallaxContainer
        className="parallax"
        containerStyles={{
          width: "auto",
          overflow: "visible",
          gridTemplateColumns: "auto auto auto auto auto",
        }}
        resetOnLeave
      >
        <MouseParallaxChild
          factorX={0.08}
          factorY={0.08}
          updateStyles={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: "100%",
          }}
        >
          <img
            src={FaqsDesktopView.src}
            alt="img"
            className="faqs-desktopView-img faqs-img d-none d-lg-block "
          />
          <img
            src={FaqsMobileView.src}
            alt="img"
            className="faqs-mobileview-img faqs-img mb-5 d-lg-none"
          />
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <div
        className="accordion-parent accordion"
        id="accordionPanelsStayOpenExample"
      >
        {AccordionData.map((value, index) => {
          return (
              <Accordion
                key={index}
                KeyIndex={index}
                heading={value.heading}
                para1={value.para1}
                para2={value.para2}
                number={value.number}
              />
          );
        })}
      </div>
    </div>
  </section>
</>;
};
export default Faqs;

const AccordionData = [
  {
    heading: "Q1: What is the surity that my time and money will not be lose?",

    para1:
      "As an Industry Experienced Web Developer, I will provide you with Free Work samples for your project. In this way, you will be able to confirm my work quality without paying me a single penny, sounds great!. let come in my inbox to win your project.",
    para2:"",
    number: "One",
  },
  {
    heading: " Q2:Do you perform modifications to the existing website or web application?",
    para1:
      " Yes, Being a specialized front-end developer,I can perform easy or complex front-end modifications on existing websites or web applications to make them perfect for you!",
    para2: "",
    number: "Two",
  },
  {
    heading: "Q3:Can you build the website from scratch,if I don&apos;t have a website design?",
    para1:
      "Sure, I have a lot of academic and real industry experience to design attractive & professional websites UI/UX. I will design a professional, engaging, and eye-catching UI/UX website or web application.",
    para2:" ",
    number: "Three",
  },
  {
    heading: " Q4:Will my website or web app be responsive and cross-browser support?",
    para1:
      "Yes, my work is clean and I pay a lot of attention to the responsive part. Your website will be cross-browser support and 100% responsive on all screen sizes of mobiles, tablets, laptops & desktops.",
    para2:"",
    number: "Four",
  },
  {
    heading: "Q5: Will my website be SEO-friendly?",
    para1:
      "Next.js Gatsby helps your site in ranking and perform better results in search engines, I use gatsby.js next.js to build SEO-friendly websites.",
    para2: "",
    number: "Five",
  },
  {
    heading:
      " Q6: How I will track my project progress status?",
    para1:
      "In the first phase of development,I will give you a live website link without any additional cost to review the updates at any time and I will deploy your website on GitHub-Pages,Netlify,Heruko, Vercel or on other platforms depending on your project.",
    para2:" ",
    number: "Six",
  },
];