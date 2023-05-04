import React from "react";
import "./SearchResults.css";
import Events from "../Events/Events";
import Groups from "../Groups/Groups";

function SearchResults() {
  return (
    <div className="searchResults">
      <h1 className="mt-5">Event near Bangalore,IN</h1>
      <div className="tabs">
        <p className="d-flex gap-4 ms-4">
          <a
            className="button"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <h4> Events</h4>
          </a>
          {/* <button
            className="btn "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Button with data-bs-target
          </button> */}
          <a
            className="button "
            data-bs-toggle="collapse"
            href="#collapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <h4> Groups</h4>
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div class="card card-body">
            <Events />
          </div>
        </div>

        <div className="collapse" id="collapseExample1">
          <div className="card card-body">
            <Groups />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
