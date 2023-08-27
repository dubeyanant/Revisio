import React from "react";
import useLinks from "./useLinks";

const Twitter = () => {
  const { fetchError, links } = useLinks("twitter.com");

  return (
    <div className="Twitter">
      {fetchError && <p>{fetchError}</p>}
      {links && (
        <>
          {links.map((link) => (
            <blockquote className="twitter-tweet" key={link}>
              <a href={link}>{link} </a>
            </blockquote>
          ))}
        </>
      )}
    </div>
  );
};

export default Twitter;
