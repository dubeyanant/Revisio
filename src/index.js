import React from "react";
import ReactDOM from "react-dom/client";
import Youtube from "./youtube";
import Twitter from "./twitter";

function ContentList() {
  return (
    <>
      <Youtube />
      <Twitter />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ContentList />);
