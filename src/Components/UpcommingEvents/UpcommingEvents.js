import React from "react";
import "./UpcommingEvents.css";
import { useSelector } from "react-redux";

function UpcommingEvents() {
  const { events } = useSelector((store) => store.MeetupData);

  let upcommingEvents = events.map((arr) => {
    return (
      <div className="upcommingEvents">
        <img className="story-Img" src={arr.image} alt="story img" />
        <div className="card-body">
          <h5 className="card-title">
            {arr.date}
            {arr.time}
          </h5>
          <h5 className="card-title">{arr.title}</h5>
          <h5 className="card-title">Hosted by {arr.personName}</h5>
        </div>
      </div>
    );
  });

  return (
    <div className="Main">
      <div className="topText">
        {" "}
        <h3 className="font-weight-bold">Upcoming online events</h3>
        <p style={{color:"blue"}}>Explore more Events</p>
      </div>

      <div className="allEvents">{upcommingEvents}</div>
    </div>
  );
}
export default UpcommingEvents;
