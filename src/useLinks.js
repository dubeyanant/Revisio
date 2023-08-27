// useLinks.js
import { useState, useEffect } from "react";
import supabase from "./config/supabaseClient";

function useLinks(hostname) {
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

            if (parsedUrl.hostname === hostname) {
              if (hostname === "www.youtube.com") {
                const videoId = url.match(/[?&]v=([^&]+)/)[1];
                return `https://www.youtube.com/embed/${videoId}`;
              } else if (hostname === "twitter.com") {
                const parts = url.split("/");
                return parts[parts.length - 1];
              }
            }
            return null;
          })
          .filter((link) => link !== null);

        console.log(filteredLinks);
        setLinks(filteredLinks);
      }
    };

    fetchLinks();
  }, [hostname]);

  return { fetchError, links };
}

export default useLinks;
