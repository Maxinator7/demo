import React from "react";
import "./EventDetails.css";

export default function EventDetails() {
  return (
    <>
      <h1 style={{ margin: "5rem" }}>Cinco de Mayo Virtual Fiesta</h1>
      <div className="eventDetails">
        <div className="hostData">
          <img className="profileImg" src="https://picsum.photos/200" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Hosted by</span>
            <span>Jules</span>
          </div>
        </div>
        <div>
          <img className="eventImg" src="https://picsum.photos/200/300" />
          <div className="details">
            <h3>Details</h3>
            <p>
              Virtual Cinco de Mayo is a festive celebration that takes place
              online, typically on May 5th each year. It is a virtual event that
              brings people together to commemorate the Mexican army's victory
              over the French army at the Battle of Puebla on May 5, 1862. The
              event features a wide range of activities, including virtual
              parties, live music performances, virtual cooking classes, and
              educational presentations about the history and significance of
              Cinco de Mayo.
            </p>
          </div>
          <div className="attendees">
            <h3>Attendee (1)</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
                backgroundColor: "white",
                width: "7rem",
                height: "12rem",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <img className="attendeeImg" src="https://picsum.photos/200" />
              <span style={{ fontSize: "large", fontWeight: "bold" }}>
                Jules
              </span>
              <span>Organizer</span>
            </div>
          </div>
          <div className="photos">
            <h3>Photos (0)</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
                backgroundColor: "white",
                width: "100%",
                height: "10rem",
                alignItems: "center",
              }}
            ></div>
          </div>
          <div className="location">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h6>SAT, MAY 6 · 4:30 AM IST</h6>
              <h3>Cinco de Mayo Virtual Fiesta</h3>
            </div>
            <div className="buttons">
              <span
                style={{
                  fontSize: "x-large",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                Free
                <i class="fa-regular fa-bookmark"></i>
              </span>
              <button className="shareBtn">share</button>
              <button className="attend">Attend online</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
