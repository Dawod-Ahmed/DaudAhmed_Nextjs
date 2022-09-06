import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ContactRightArrow } from "../../../assets";
import { FormField } from "../../common";
import axios from "axios";
import Swal from "sweetalert2";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is Invalid").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  detail: Yup.string().required("Detail is required"),
});

const ContactForm = () => {
  const verifyVideo = () => {
    Swal.fire({
      text: "Your Message is sent!,Thanks",
      icon: "success",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  return (
    <>
      <section className="contact-section-parent py-5 mb-5 flex-column flex-lg-row ">
        <div className="contact-left-content position-relative">
          <h1 className="heading  freelancing-heading">
            <span className="heading-first">Let&apos;s</span>
            {/* <img src="" alt="" /> */}
            <img
              src={ContactRightArrow.src}
              alt="img"
              className="contact-form-right-icon px-5 pb-3"
            />
            <br />
            <span className="heading-second ">Connect</span>
          </h1>
          <p id="testpara" className="general-text pt-3 pb-5 px-md-2 px-md-3">
            If you have any queries, please do not hesitate to send me a
            message. I will response to you within one hour, and you will find
            me happy to solve your queries!
          </p>

          <div className="open-for-porject position-absolute rounded-circle d-flex justify-content-center align-items-center text-center p-lg-4 p-xl-3">
            Open for new project{" "}
          </div>
          <div className="background-text">Inquires</div>
        </div>

        <div className="contact-right-form">
          <Formik
            initialValues={{
              name: "",
              email: "",
              number: "",
              subject: "",
              detail: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              axios
                .post("https://formcarry.com/s//jcU9ettAF", values, {
                  headers: { Accept: "application/json" },
                })
                .then(function (response) {
                  if (response.status === 200) {
                    verifyVideo();
                  }
                })
                .catch(function (error) {
                  alert(error);
                });
            }}
          >
            {({ errors, touched, getFieldMeta }) => (
              <Form
                className=" form-floating  mb-3 row g-3 d-flex  justify-content-end form main-form-parent"
                // onSubmit={handleSubmit}
              >
                <FormField
                  type="text"
                  className={`name-input ${
                    errors.name && touched.name ? "border-danger" : ""
                  }`}
                  name="name"
                  id="floatingNameInput"
                  placeholder="Name"
                />

                <FormField
                  type="email"
                  className={`email-input ${
                    errors.email && touched.email ? "border-danger" : ""
                  }`}
                  name="email"
                  id="floatingEmailInput"
                  placeholder="Email address"
                />

                <FormField
                  type="text"
                  className={`number-input ${
                    errors.number && touched.number ? "border-danger" : ""
                  }`}
                  name="number"
                  id="floatingNumberInput"
                  placeholder="Contact Number (Optional)"
                />
                <FormField
                  type="text"
                  className={`subject-input ${
                    errors.subject && touched.subject ? "border-danger" : ""
                  }`}
                  name="subject"
                  id="floatingSubjectInput"
                  placeholder="Subject"
                />

                <FormField
                  type="text"
                  className={`detail-input ${
                    errors.detail && touched.detail ? "border-danger" : ""
                  }`}
                  name="detail"
                  id="floatingtextareaInput"
                  placeholder="Please write details here"
                />

                <button type="submit" className="btn form-btn mx-2">
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
