import React from "react";
import Storycard from "../StoryCard/Storycard";
import "./UpcommingEvents.css";

let events = new Array(5).fill(0);

let upcommingEvents = events.map((data) => {
  return <Storycard />;
});

function UpcommingEvents() {
  return (
    <div className="upcommingEvents">
      <div className="topText">
        {" "}
        <h3 className="font-weight-bold">Upcoming online events</h3>
        <p>Explore more Events</p>
      </div>

      <div className="d-flex">{upcommingEvents}</div>
    </div>
  );
}
export default UpcommingEvents;
