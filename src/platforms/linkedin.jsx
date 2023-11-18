import React from "react";
import MediaEmbed from "./MediaEmbed";
import { LinkedInEmbed } from "react-social-media-embed";

const Linkedin = () => {
  return (
    <MediaEmbed hostname="www.linkedin.com">
      {(link) => <LinkedInEmbed url={link} width={500} height={877} />}
    </MediaEmbed>
  );
};

export default Linkedin;
