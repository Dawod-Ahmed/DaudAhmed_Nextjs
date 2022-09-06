import Head from "next/head";
import { useEffect } from "react";
import { Footer, Header, ThemeFirstLayer } from "../components/layout";
import "../styles/general/main.scss";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    !(function () {
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
  }, []);
  return (
    <>
      <Head>
        <title>Dawood Ahmed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
