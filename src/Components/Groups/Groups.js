import React from "react";
import "./Groups.css";

export default function Groups() {
  return (
    <div>
      <div className="groupsTimeline">
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://loremflickr.com/320/240"
                className="img-fluid  rounded-4  p-2"
                alt="eventImg"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <span>Sun, MAY 6 5:30 PM IST </span>
                <h5 className="card-title">Title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.5rem",
                  }}
                >
                  attendee{" "}
                  <i
                    class="fa-solid fa-arrow-up-from-bracket"
                    style={{ color: "#6c7a93" }}
                  ></i>
                </span>
                {/* <p className="card-text">
                    <small className="text-body-secondary">
                      attendee
                    </small>
                  </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
