import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import useLinks from "./useLinks";

const Twitter = () => {
  const { fetchError, links } = useLinks("twitter.com");

  return (
    <div className="Twitter">
      {fetchError && <p>{fetchError}</p>}
      {links && (
        <>
          {links.map((link) => (
            <div key={link}>
              <TwitterTweetEmbed tweetId={link} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Twitter;
