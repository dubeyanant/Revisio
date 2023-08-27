import React from "react";
import MediaEmbed from "./MediaEmbed";
import { TwitterEmbed } from "react-social-media-embed";

const Twitter = () => {
  return (
    <MediaEmbed hostname="twitter.com">
      {(link) => <TwitterEmbed url={link} width={500} />}
    </MediaEmbed>
  );
};

export default Twitter;
