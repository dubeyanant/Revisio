import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function ContentList() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawResponse = await fetch("http://localhost:3000/url");

        // Check if the rawResponse status code indicates success (e.g., 200 OK)
        if (!rawResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        // Parse the rawResponse body as JSON
        const response = await rawResponse.json();
        const videoEmbedArray = response.map((video) => {
          const url = video.url;
          const videoId = url.match(/[?&]v=([^&]+)/)[1];
          return `https://www.youtube.com/embed/${videoId}`;
        });
        setData(videoEmbedArray);

        // Use the response as needed
        console.log("Response from the API:", response);
      } catch (error) {
        console.error("Error fetching bata:", error);
      }
    };

    // Call the fetchData function to make the GET request
    fetchData();
  }, []);

  if (data.length > 0) {
    return (
      <>
        {data.map((youtubeVideoUrl) => (
          <iframe
            width="560"
            height="315"
            key={youtubeVideoUrl}
            src={youtubeVideoUrl}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          />
        ))}
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ContentList />);