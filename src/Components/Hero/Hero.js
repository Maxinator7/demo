import React from "react";
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <div className="d-flex p-2 mt-4 ms-4 me-4">
        <div className="w-50">
          <h1 className="caption">
            The people platform—Where interests become friendships
          </h1>
          <p className="description">
            Whatever your interest, from hiking and reading to networking and
            skill sharing, there are thousands of people who share it on Meetup.
            Events are happening every day—log in to join the fun.
          </p>
        </div>
        <div className="w-50">
          <img src="herobg.svg" alt="meetup.com" />
        </div>
      </div>
    </div>
  );
}
