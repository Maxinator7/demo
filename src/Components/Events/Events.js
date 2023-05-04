import React from "react";
import "./Events.css";
export default function Events() {
  return (
    <div className="events">
      <div className="filterBar">
        <select className="dropDown">
          <option value="Anyday">Anyday</option>
          <option value="Starting soon">Starting soon</option>
          <option value="Today">Today</option>
          <option value="Tomorrow">Tomorrow</option>
          <option value="This week">This week</option>
          <option value="This weekend">This weekend</option>
          <option value="Next week">Next week</option>
          <option value="Custom">Custom</option>
        </select>
        <select className="dropDown">
          <option value="Any type">Any type</option>
          <option value="Online">Online</option>
          <option value="In person">In person</option>
          <option value="Indoors only">Indoors only</option>
          <option value="Outdoors only">Outdoors only</option>
        </select>

        {/* ================================= */}

        <select className="dropDown">
          <option value="Any distance">Any distance</option>
          <option value=" 2 miles"> 2 miles</option>
          <option value="5 miles">5 miles</option>
          <option value="10 miles">10 miles</option>
          <option value="25 miles">25 miles</option>
          <option value="50 miles">50 miles</option>
          <option value="100 miles">100 miles</option>
        </select>

        {/* ================================= */}

        <select className="dropDown">
          <option value="Any category">Any category</option>
          <option value=" New Groups"> New Groups</option>
          <option value="Art & Culture">Art & Culture</option>
          <option value="Career & Business">Career & Business</option>
          <option value="Community & Environment ">
            Community & Environment{" "}
          </option>
          <option value="Dancing">Dancing</option>
          <option value="Games">Games</option>
          <option value="Health & Wellbeing">Health & Wellbeing</option>
          <option value="Hobbies & Passions">Hobbies & Passions</option>
          <option value="Identity and Language">Identity and Language</option>
          <option value="Movements and politics">Movements and politics</option>
          <option value="Music">Music</option>
          <option value="Parents & family">Parents & family</option>
          <option value="Pets & Animals">Pets & Animals</option>
          <option value="Religion and Spirituality">
            Religion and Spirituality
          </option>
          <option value="Science & Education">Science & Education</option>
          <option value="Social Activities">Social Activities</option>
          <option value="Sports & Fitness">Sports & Fitness</option>
          <option value="Support & Coaching">Support & Coaching</option>
          <option value="Technology">Technology</option>
          <option value="Travel & Outdoor">Travel & Outdoor</option>
          <option value="Writing">Writing</option>
        </select>

        {/* ================================= */}

        <select className="dropDown">
          <option value="Any Relevance">Relevance</option>
          <option value="Date">Date</option>
        </select>

        <span>Reset filters</span>
      </div>
      <div className="lowerDiv">
        <div className="timeline">
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
        <div className="locationDetails">
          <span>Find events near</span>
          <h1>Bangalore,IN</h1>
          <h5>Map</h5>
        </div>
      </div>
    </div>
  );
}
