import { useState, useEffect } from "react";
import supabase from "./config/supabaseClient";

const Youtube = () => {
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

          if (parsedUrl.hostname === "www.youtube.com") {
            const videoId = url.match(/[?&]v=([^&]+)/)[1];
            return `https://www.youtube.com/embed/${videoId}`;
          }

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
