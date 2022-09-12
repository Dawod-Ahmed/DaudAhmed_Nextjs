import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer, Header, ThemeFirstLayer } from "../components/layout";
import "../styles/general/main.scss";
import { Bars } from "react-loader-spinner";
import { Logo } from "../assets";
function MyApp({ Component, pageProps }) {
  const [hidePreloader, setHidePreloader] = useState(true);

  useEffect(() => {
    (function () {
      var e = {
          token: "+971521996785",
          position: "right",
          bottomSpacing: "30",
          callToActionMessage: "Start Chat",
          displayOn: "everywhere",
          subtitle: "Typically replies in 30 minutes",
          message: {
            name: "Web Sols",
            content:
              "We are pleased to help you out!\nPlease start chat,\n we are online 24/7 and reply you in less than 30 minutes!",
          },
        },
        t = document.location.protocol + "//bothelp.io",
        o = document.createElement("script");
      (o.type = "text/javascript"),
        (o.async = !0),
        (o.src = t + "/widget-folder/widget-whatsapp-chat.js"),
        (o.onload = function () {
          BhWidgetWhatsappChat.init(e);
        });
      var n = document.getElementsByTagName("script")[0];
      n.parentNode.insertBefore(o, n);
    })();

    const interval = setInterval(() => {
      setHidePreloader(false);
    }, 4000);
    setInterval(() => {
      clearInterval(interval);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Head>
        <title>Dawood Ahmed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {hidePreloader ? (
        <div className="preloader-parent  w-100 ">
          <img src={Logo.src} alt="img" className="preloader-logo mb-5 pb-4 " />
          <Bars
            type="Bars"
            height="100"
            width="50"
            color="#00da5d"
            ariaLabel="Loading"
          />
        </div>
      ) : null}
      <ThemeFirstLayer />
      <div className="pages-parent mx-auto bg-transparent">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
