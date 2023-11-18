import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

function MediaEmbed({ hostname, children }) {
  const [fetchError, setFetchError] = useState(null);
  const [links, setLinks] = useState(null);

  useEffect(() => {
    const fetchLinks = async () => {
      const { data, error } = await supabase.from("links").select("url");

      if (error) {
        setFetchError("Could not fetch any URLs");
        setLinks(null);
        console.error(error);
        return;
      }

      if (data) {
        setFetchError(null);

        const filteredLinks = data
          .map((video) => {
            const { url } = video;
            const parsedUrl = new URL(url);

            return parsedUrl.hostname === hostname ? url : null;
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
