import React from "react";

export default function Storycard() {
  return (
    <div>
      <div className="card ms-4 mt-4" >
        <img src="..." className="card-img-top" alt="story img" />
        <div className="card-body">
          {/* <h5 className="card-title">Card title</h5> */}
          
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
