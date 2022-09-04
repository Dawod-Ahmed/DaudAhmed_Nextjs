import Head from "next/head";
import { ContactForm, Faqs } from "../components/pages/Contact";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Dawood Ahmed</title>
      </Head>
      <main className="w-100 d-flex-direction">
        <ContactForm />
        <Faqs />
      </main>
    </>
  );
};

export default Contact;
