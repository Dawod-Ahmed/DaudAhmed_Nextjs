import Link from "next/link";
import Image from "next/image";
import { FreelancingImage } from "../../../assets";
const Freelancing = () => {
  return (
    <>
      <section className="freelancing-section-parent mt-5">
        <div className="freelancing-left-content py-5 mb-5  my-lg-0  py-lg-0">
          <h1 className="heading  freelancing-heading">
            <span className="heading-first freelancing-heading-one">
              Hire Me for
            </span>
            <br />
            <span className="heading-second freelancing-heading-two">
              Freelancing
            </span>
          </h1>
          <p className="general-text freelancing-para pt-3 pb-5">
            I am also working as a Full-Time freelancer,So I am available almost
            all time and you can send my you quote at any time!
          </p>
          <Link href="/contact">
            <a className="btn freelancin-btn">Contact Me</a>
          </Link>
        </div>
        <div className="freelancing-right-img">
          <div className="freelancing-img position-relative">
            <Image
              src={FreelancingImage.src}
              alt="img"
              layout="fill"
              className="hello"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Freelancing;
