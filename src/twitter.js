import { useState, useEffect } from "react";
import supabase from "./config/supabaseClient";

const Twitter = () => {
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

        const videoEmbedArray = data.map((video) => {
          const url = video.url;
          const parsedUrl = new URL(video.url);

          if (parsedUrl.hostname === "twitter.com") return url;
          return null;
        });

        const VideoEmbedArray = videoEmbedArray.filter((link) => link !== null);
        console.log(VideoEmbedArray);
        setLinks(VideoEmbedArray);
      }
    };

    fetchLinks();
  }, []);

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
