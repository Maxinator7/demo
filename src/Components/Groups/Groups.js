import React from "react";
import "./Groups.css";
import { useSelector } from "react-redux";

export default function Groups() {
  const { Groups } = useSelector((store) => store.MeetupData);

  const allGroupCards = Groups.map((data) => {
    return (
      <div className="groupsTimeline">
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={data.Image}
                className="img-fluid  rounded-4  p-2"
                alt="groupImg"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{data.Name}</h3>
                <h5>{data.location}</h5>
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
                  {data.memberscount} attendees{" "}
                  <span>
                    Public <i class="fa-sharp fa-solid fa-question"></i>
                  </span>
                  <i
                    className="fa-solid fa-arrow-up-from-bracket"
                    style={{ color: "#6c7a93" }}
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="groupsFilterBar">
        <select className="dropDown">
          <option style={{fontSize:"small"}} value="Any distance">Any distance</option>
          <option style={{fontSize:"small"}} value=" 2 miles"> 2 miles</option>
          <option style={{fontSize:"small"}} value="5 miles">5 miles</option>
          <option style={{fontSize:"small"}} value="10 miles">10 miles</option>
          <option style={{fontSize:"small"}} value="25 miles">25 miles</option>
          <option style={{fontSize:"small"}} value="50 miles">50 miles</option>
          <option style={{fontSize:"small"}} value="100 miles">100 miles</option>
        </select>

        {/* ================================= */}

        <select className="dropDownY">
          <option style={{fontSize:"small"}} value="Any category">Any category</option>
          <option style={{fontSize:"small"}} value=" New Groups"> New Groups</option>
          <option style={{fontSize:"small"}} value="Art & Culture">Art & Culture</option>
          <option style={{fontSize:"small"}} value="Career & Business">Career & Business</option>
          <option style={{fontSize:"small"}} value="Community & Environment ">
            Community & Environment{" "}
          </option>
          <option style={{fontSize:"small"}} value="Dancing">Dancing</option>
          <option style={{fontSize:"small"}} value="Games">Games</option>
          <option style={{fontSize:"small"}} value="Health & Wellbeing">Health & Wellbeing</option>
          <option style={{fontSize:"small"}} value="Hobbies & Passions">Hobbies & Passions</option>
          <option style={{fontSize:"small"}} value="Identity and Language">Identity and Language</option>
          <option style={{fontSize:"small"}} value="Movements and politics">Movements and politics</option>
          <option style={{fontSize:"small"}} value="Music">Music</option>
          <option style={{fontSize:"small"}} value="Parents & family">Parents & family</option>
          <option style={{fontSize:"small"}} value="Pets & Animals">Pets & Animals</option>
          <option style={{fontSize:"small"}} value="Religion and Spirituality">
            Religion and Spirituality
          </option>
          <option style={{fontSize:"small"}} value="Science & Education">Science & Education</option>
          <option style={{fontSize:"small"}} value="Social Activities">Social Activities</option>
          <option style={{fontSize:"small"}} value="Sports & Fitness">Sports & Fitness</option>
          <option style={{fontSize:"small"}} value="Support & Coaching">Support & Coaching</option>
          <option style={{fontSize:"small"}} value="Technology">Technology</option>
          <option style={{fontSize:"small"}} value="Travel & Outdoor">Travel & Outdoor</option>
          <option style={{fontSize:"small"}} value="Writing">Writing</option>
        </select>

        <span>Reset filters</span>
      </div>
      <div>{allGroupCards}</div>
    </div>
  );
}
