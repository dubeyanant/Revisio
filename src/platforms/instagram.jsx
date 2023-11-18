import React from "react";
import MediaEmbed from "./MediaEmbed";
import { InstagramEmbed } from "react-social-media-embed";

const Instagram = () => {
  return (
    <MediaEmbed hostname="www.instagram.com">
      {(link) => <InstagramEmbed url={link} width={500} />}
    </MediaEmbed>
  );
};

export default Instagram;
