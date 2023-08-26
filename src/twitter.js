import React, { useEffect } from "react";

// Add the Twitter widget script here
const twitterWidgetScript = document.createElement("script");
twitterWidgetScript.src = "https://platform.twitter.com/widgets.js";
twitterWidgetScript.async = true;
twitterWidgetScript.charset = "utf-8";
document.head.appendChild(twitterWidgetScript);

function TweetEmbed() {
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
  }, []);

  return (
    <div className="tweet-container">
      <blockquote className="twitter-tweet">
        <a href="https://twitter.com/_aanant/status/1695173009181659298"> </a>
      </blockquote>
    </div>
  );
}

export default TweetEmbed;
