import React from "react";
import MediaEmbed from "./MediaEmbed";
import { YouTubeEmbed } from "react-social-media-embed";

const Youtube = () => {
  return (
    <MediaEmbed hostname="www.youtube.com">
      {(link) => <YouTubeEmbed url={link} width={500} height={338} />}
    </MediaEmbed>
  );
};

export default Youtube;
