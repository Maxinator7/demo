import React from "react";
import "./GroupDetails.css";

export default function GroupDetails() {
  return (
    <>
      <div className="groupDetails">
        <div className="left">
          <img
            className="eventImg"
            src="https://plus.unsplash.com/premium_photo-1661284807360-b6bad69ea3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          />
        </div>
        <div className="right">
          <div>
            <h1 style={{ fontWeight: "bolder" }}>
              New Paltz Ireland Meetup Group
            </h1>
            <span className="detailsSpan">
              <i class="fa-solid fa-location-dot"></i>
              New Paltz, NY
            </span>
            <span className="detailsSpan">
              <i class="fa-sharp fa-solid fa-users"></i>6 members Public group
            </span>
            <span className="detailsSpan">
              <i class="fa-solid fa-user"></i>
              Organized by Kathe K.
            </span>
          </div>
          <div>
            <span className="detailsSpan">
              share :
              <i
                class="fa-brands fa-square-facebook"
                style={{ color: "#8f98a8" }}
              ></i>
              <i
                class="fa-brands fa-square-twitter"
                style={{ color: "#8f98a8" }}
              ></i>
              <i class="fa-brands fa-linkedin" style={{ color: "#8f98a8" }}></i>
              <i class="fa-solid fa-inbox" style={{ color: "#8f98a8" }}></i>
            </span>
          </div>
        </div>
      </div>
      <hr></hr>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "5rem",
          marginLeft: "5rem",
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <button style={{ color: "rgb(0, 143, 163)" }} className="groupBtn">
            About
          </button>
          <button className="groupBtn">Events</button>
          <button className="groupBtn">Members</button>
          <button className="groupBtn">Photos</button>
          <button className="groupBtn">Discussions</button>
          <button className="groupBtn">More</button>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button className="jointhegroup">Join the group</button>
          <button
            style={{
              borderRadius: "0.5rem",
              height: "3rem",
              width: "3rem",
              backgroundColor: "white",
            }}
          >
            ...
          </button>
        </div>
      </div>
    </>
  );
}
