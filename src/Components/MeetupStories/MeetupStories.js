import React from "react";
import Storycard from "../StoryCard/Storycard";
import "./MeetupStories.css";

export default function MeetupStories() {
  let events = new Array(5).fill(0);

  let meetupStories = events.map((data) => {
    return <Storycard />;
  });

  return (
    <div className="meetupStories">
      <div className="aboutMeetup">
        {" "}
        <h3>Stories from Meetup</h3>
        <p>
          People on Meetup have fostered community, learned new skills, started
          businesses, and made life-long friends. Learn how.
        </p>
      </div>
      <div className="d-flex">{meetupStories}</div>
    </div>
  );
}
