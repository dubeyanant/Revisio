import React from "react";
import ReactDOM from "react-dom/client";
import Youtube from "./platforms/youtube";
import Twitter from "./platforms/twitter";
import Instagram from "./platforms/instagram";
import Facebook from "./platforms/facebook";
import Linkedin from "./platforms/linkedin";
import Pinterest from "./platforms/pinterest";
import TikTok from "./platforms/tiktok";

function ContentList() {
  return (
    <>
      <TikTok />
      <Pinterest />
      <Linkedin />
      <Facebook />
      <Instagram />
      <Youtube />
      <Twitter />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ContentList />);
