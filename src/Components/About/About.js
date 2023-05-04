import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <div className="aboutText">
        <h3 style={{ fontWeight: "bolder", color: "black" }}>
          How Meetup Works
        </h3>
        <p>
          Meet new people who share your interests through online and in-person
          events. It’s free to create an account.
        </p>
      </div>
      <div className="d-flex w-75 h-25 justify-content-centre ">
        <div className="card ms-4 mt-4 align-items-center">
          <img
            src="joingroup.svg"
            className="card-img-top"
            alt="Join a Group"
          />
          <div className="card-body">
            <h5 className="card-title">Join a group</h5>
            <p>
              Do what you love, meet others who love it, find your community.
              The rest is history!
            </p>
          </div>
        </div>

        <div className="card ms-4 mt-4 align-items-center">
          <img
            src="findEvent.svg"
            className="card-img-top"
            alt="Find an Event"
          />
          <div className="card-body">
            <h5 className="card-title">Find an Event</h5>
            <p>
              Events are happening on just about any topic you can think of,
              from online gaming and photography to yoga and hiking.
            </p>
          </div>
        </div>

        <div className="card ms-4 mt-4 align-items-center">
          <img
            src="startagroup.svg"
            className="card-img-top"
            alt="Start a group"
          />
          <div className="card-body">
            <h5 className="card-title">Start a group</h5>
            <p>
              You don't have to be an expert to gather people together and
              explore shared interests.
            </p>
          </div>
        </div>
      </div>
      <Link to={"/joinMeetup"}>
        <button className="joinMeetupButton">join Meetup</button>
      </Link>
    </div>
  );
}
