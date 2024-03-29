import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerTop">
        <h4>Create your own Meetup group</h4>
        <button className="getStartedbutton">Get Started</button>
      </div>
      <hr />
      <div className="links">
        <div className="userList">
          <h3>Your Account</h3>
          <p>Sign up</p>
          <p>Log in</p>
          <p>Help</p>
          <p>Become an Affiliate</p>
        </div>
        <div className="featuresList">
          <h3>Discover</h3>
          <p>Groups</p>
          <p>Calender</p>
          <p>Topics</p>
          <p>Cities</p>
          <p>Online Events</p>
          <p>Local Guides</p>
        </div>
        <div className="Siteoptions">
          <h3>Meetup</h3>
          <p>About</p>
          <p>Blog</p>
          <p>Meetup Pro</p>
          <p>Carrers</p>
          <p>Apps</p>
          <p>Podcast</p>
        </div>
        <div className="extra"></div>
      </div>

      <h2 style={{ color: "white", margin: "0" }}>Follow us</h2>

      <div className="socialHandles">
        <div className="groupone">
          <a href="https://www.facebook.com/meetup/">
            <i
              class="fa-brands fa-facebook fa-2x"
              style={{ color: "#c1c2c2", margin: "1rem" }}
            ></i>
          </a>
          <a href="https://twitter.com/Meetup/">
            <i
              class="fa-brands fa-twitter fa-2x "
              style={{ color: "#c1c2c2", margin: "1rem" }}
            ></i>
          </a>
          <a href="https://www.youtube.com/meetup">
            <i
              class="fa-brands fa-youtube fa-2x "
              style={{ color: "#c1c2c2", margin: "1rem" }}
            ></i>
          </a>
          <a href="https://www.instagram.com/meetup/">
            {" "}
            <i
              class="fa-brands fa-instagram fa-2x "
              style={{ color: "#c1c2c2", margin: "1rem" }}
            ></i>
          </a>
          <a href="https://www.tiktok.com/notfound">
            <i
              class="fa-brands fa-tiktok fa-2x"
              style={{ color: "#c1c2c2", margin: "1rem" }}
            ></i>
          </a>
        </div>
        <div className="grouptwo">
          <a href="https://play.google.com/store/apps/details?id=com.meetup&hl=en-US">
            {" "}
            <img className="playbtn" src="google-play-icon-svg-26.jpg" />
          </a>
          <a href="https://apps.apple.com/us/app/meetup/id375990038">
            {" "}
            <img className="playbtn" src="apst.png" />
          </a>
        </div>
      </div>
      <div className="lowest">
        <p> &#169; 2023 Meetup</p>
        <p>Terms of service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Help</p>
      </div>
    </div>
  );
}
