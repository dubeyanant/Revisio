import React, { useEffect, useState } from "react";

// Add the Twitter widget script here
const twitterWidgetScript = document.createElement("script");
twitterWidgetScript.src = "https://platform.twitter.com/widgets.js";
twitterWidgetScript.async = true;
twitterWidgetScript.charset = "utf-8";
document.head.appendChild(twitterWidgetScript);

function TweetEmbed() {
  const [data, setData] = useState({});

  useEffect(() => {
    // Create a function to initialize the Twitter widget
    const initializeTwitterWidget = () => {
      if (window.twttr && window.twttr.widgets) {
        // The Twitter widget is available, so load it
        window.twttr.widgets.load();
      } else {
        // The Twitter widget is not available yet, so retry after a delay
        setTimeout(initializeTwitterWidget, 100);
      }
    };

    // Load the Twitter widget
    initializeTwitterWidget();

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
          const parsedUrl = new URL(url);

          // Check if the hostname is "www.youtube.com"
          if (parsedUrl.hostname === "twitter.com") return url;
          return null;
        });

        // Filter out null values to remove empty URLs
        const VideoEmbedArray = videoEmbedArray.filter((url) => url !== null);
        setData(VideoEmbedArray);

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
      <div className="tweet-container">
        {data.map((twitterUrl) => (
          <blockquote className="twitter-tweet">
            <a href={twitterUrl}> </a>
          </blockquote>
        ))}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default TweetEmbed;
