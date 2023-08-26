import React from "react";
import ReactDOM from "react-dom/client";
import YoutubeEmbed from "./youtube";

function ContentList() {
  return (
    <>
      <YoutubeEmbed />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ContentList />);
