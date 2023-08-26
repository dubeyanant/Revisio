import React from "react";
import ReactDOM from "react-dom/client";
import YoutubeEmbed from "./youtube";
import TweetEmbed from "./twitter";

function ContentList() {
  return (
    <>
      <YoutubeEmbed />
      <TweetEmbed />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ContentList />);
