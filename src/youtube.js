import React from "react";
import useLinks from "./useLinks";

const Youtube = () => {
  const { fetchError, links } = useLinks("www.youtube.com");

  return (
    <div className="Youtube">
      {fetchError && <p>{fetchError}</p>}
      {links && (
        <>
          {links.map((link) => (
            <iframe
              width="560"
              height="315"
              key={link}
              src={link}
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Youtube;
