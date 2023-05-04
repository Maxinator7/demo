import React from "react";
import "./PopularGroups.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function PopularGroups() {
  const { Groups } = useSelector((store) => store.MeetupData);

  let populargroups = Groups.map((data) => {
    return (
      <div className="pg">
        <Link to={"/GroupDetails"}>
          <div className="pg-Top">
            <img src={data.Image} className="groupImg" alt="group-image" />
            <h5>{data.Name}</h5>
          </div>

          <div className="">
            <h6>{data.location}</h6>
            <p>{data.GroupDescription}</p>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="popularGroups">
      <div className="topText">
        {" "}
        <h3>Popular groups</h3>
        <p style={{ color: "blue" }}>Explore more groups</p>
      </div>
      <div className="cards">{populargroups}</div>
    </div>
  );
}
