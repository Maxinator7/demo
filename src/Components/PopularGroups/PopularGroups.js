import React from "react";
import Storycard from "../StoryCard/Storycard";
import "./PopularGroups.css";

export default function PopularGroups() {
  let events = new Array(5).fill(0);

  let populargroups = events.map((data) => {
    return <Storycard />;
  });

  return (
    <div className="popularGroups">
      <div className="topText">
        {" "}
        <h3>Popular groups</h3>
        <p>Explore more groups</p>
      </div>
      <div className="cards">{populargroups}</div>
    </div>
  );
}
