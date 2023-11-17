import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

function MediaEmbed({ hostname, children }) {
  const [fetchError, setFetchError] = useState(null);
  const [links, setLinks] = useState(null);

  useEffect(() => {
    const fetchLinks = async () => {
      const { data, error } = await supabase.from("links").select("url");
      if (error) {
        setFetchError("Could not fetch any urls");
        setLinks(null);
        console.log(error);
      }

      if (data) {
        setFetchError(null);

        const filteredLinks = data
          .map((video) => {
            const url = video.url;
            const parsedUrl = new URL(video.url);

            if (parsedUrl.hostname === hostname) return url;
            return null;
          })
          .filter((link) => link !== null);

        console.log(filteredLinks);
        setLinks(filteredLinks);
      }
    };

    fetchLinks();
  }, [hostname]);

  return (
    <div className={hostname}>
      {fetchError && <p>{fetchError}</p>}
      {links && (
        <>
          {links.map((link) => (
            <div key={link}>{children(link)}</div>
          ))}
        </>
      )}
    </div>
  );
}

export default MediaEmbed;
