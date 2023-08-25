import React from "react";
import ReactDOM from "react-dom/client";

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3001/url");

    // Check if the response status code indicates success (e.g., 200 OK)
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // Parse the response body as JSON
    const data = await response.json();

    // Use the data as needed
    console.log("Data from the API:", data);
  } catch (error) {
    console.error("Error fetching bata:", error);
  }
};

// Call the fetchData function to make the GET request
fetchData();

const youtubeUrl = "https://www.youtube.com/watch?v=XmGO4O2vpJw";
const videoId = youtubeUrl.match(/[?&]v=([^&]+)/)[1];
const youtubeVideoUrl = `https://www.youtube.com/embed/${videoId}`;

function ContentList() {
  return (
    <iframe
      width="560"
      height="315"
      src={youtubeVideoUrl}
      title="YouTube Video"
      frameBorder="0"
      allowFullScreen
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ContentList />);
