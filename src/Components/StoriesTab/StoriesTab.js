import React from "react";
import { useSelector } from "react-redux";
import "./StoriesTab.css";

export default function StoriesTab() {
  const { events } = useSelector((store) => store.MeetupData);

  const allStories = events.slice(0, 3).map((data) => {
    return (
      <div className="card ms-4 mt-4">
        <div>
          <img className="story-Img" src={data.image} alt="story img" />
        </div>
        <div className="ms-4 mt-2">
          {" "}
          <h5 style={{ color: "blue" }}>
            {data.location}{" "}
            <i
              className="fa-solid fa-arrow-right"
              style={{ color: "#2461cc" }}
            ></i>
          </h5>
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex justify-content-center mt-4 mb-4">{allStories}</div>
  );
}
