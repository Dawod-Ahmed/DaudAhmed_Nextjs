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
          token: "+971505758168",
          position: "right",
          bottomSpacing: "30",
          callToActionMessage: "Start Chat",
          displayOn: "everywhere",
          subtitle: "Typically replies in 30 minutes",
          message: {
            name: "Daud Ahmed",
            content:
              "I am pleased to help you out!\nPlease start chat,\n I am available 24/7 and reply you in less than 30 minutes!",
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
    }, 2200);
    setInterval(() => {
      clearInterval(interval);
    }, 2200);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Head>

        <title>Dawood Ahmed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
     
     
     
     
     
        

        <meta property="og:url" content="DaudAhmed.com" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="3046156625634767" />
        <meta
          property="og:title"
          content="Daud Ahmed"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="5+ Years Expert Web & Software Developer"
        />
        <meta property="og:image" content={"https://iili.io/Q455wN.png"} />

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
      <style global jsx>{`
       body .bh-widget-page-wrapper {
          display: ${hidePreloader ? "none!important" : " block!important "};
        }
      `}</style>
    </>
  );
}

export default MyApp;
