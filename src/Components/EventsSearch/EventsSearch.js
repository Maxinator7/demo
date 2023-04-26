import React from "react";
import "./EventsSearch.css";

export default function EventsSearch() {
  return (
    <div className="searchBar">
      <div className="eventSearch w-75 justify-content-center ">
        <h1 style={{color : "black"}}>What do you want to do?</h1>
        <div className="d-flex ">
          <div class="input-group mb-3 w-50">
            <span class="input-group-text" id="inputGroup-sizing-default">
              <i
                class="fa-solid fa-magnifying-glass "
                style={{ color: "#afb5c0" }}
              ></i>
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Search for tennis or UX design "
            />
          </div>
          <div class="input-group mb-3 w-50 ">
            <span class="input-group-text" id="inputGroup-sizing-default">
              {" "}
              <i
                class="fa-sharp fa-solid fa-location-dot"
                style={{ color: "#c1c7d2" }}
              ></i>
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Neighbourhood or City or Zip"
            />
          </div>
        </div>
        <button className="searchButton">Search</button>
      </div>
    </div>
  );
}
