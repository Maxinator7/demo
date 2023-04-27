import React from "react";
import { useSelector } from "react-redux";
import "./MeetupStories.css";

export default function MeetupStories() {
  const { meetupStories } = useSelector((store) => store.MeetupData);
  let allmeetupStories = meetupStories.map((data) => {
    return (
      <div className="meetupCard">
        <img src={data.image} className="card-img-top" alt="story" />
        <div className="card-body">
          <p>{data.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div classNameName="ms">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {" "}
        <h3>Stories from Meetup</h3>
        <p>
          People on Meetup have fostered community, learned new skills, started
          businesses, and made life-long friends. Learn how.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {allmeetupStories}
      </div>
    </div>
  );
}
