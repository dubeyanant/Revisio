import React from "react";
import MediaEmbed from "./MediaEmbed";
import { TikTokEmbed } from "react-social-media-embed";

const TikTok = () => {
  return (
    <MediaEmbed hostname="www.tiktok.com">
      {(link) => <TikTokEmbed url={link} width={500} />}
    </MediaEmbed>
  );
};

export default TikTok;
