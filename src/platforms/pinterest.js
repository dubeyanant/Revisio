import React from "react";
import MediaEmbed from "./MediaEmbed";
import { PinterestEmbed } from "react-social-media-embed";

const Pinterest = () => {
  return (
    <MediaEmbed hostname="in.pinterest.com">
      {(link) => <PinterestEmbed url={link} width={500} height={877} />}
    </MediaEmbed>
  );
};

export default Pinterest;
