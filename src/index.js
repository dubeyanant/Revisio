import React from "react";
import ReactDOM from "react-dom/client";
import Youtube from "./Youtube";
import Twitter from "./Twitter";

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
