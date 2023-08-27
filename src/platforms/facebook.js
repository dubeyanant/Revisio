import React from "react";
import MediaEmbed from "./MediaEmbed";
import { FacebookEmbed } from "react-social-media-embed";

const Facebook = () => {
  return (
    <MediaEmbed hostname="www.facebook.com">
      {(link) => <FacebookEmbed url={link} width={500} />}
    </MediaEmbed>
  );
};

export default Facebook;
