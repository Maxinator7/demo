import React from "react";
import Storycard from "../StoryCard/Storycard";

export default function StoriesTab() {
  let Stories = new Array(3).fill(0);

  const allStories = Stories.map((arr) => {
    return <Storycard />;
  });
  return (
    <div className="d-flex justify-content-center mt-4 mb-4">{allStories}</div>
  );
}
