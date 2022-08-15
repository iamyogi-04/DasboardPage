import React from "react";
import Bottom from "../Bottom/Bottom";
import Calender from "../Calender/Calender";
import Content from "../Content/Content";
import "./aside.css";
const Aside = (props) => {
  const {firstname}= props
  return (
    <>
    <div className="main">
      <div className="container">
        <div className="content">
          <ul className="list-aside">
            <div className="dashboard">
              <img
                src="./images/Group 79.png"
                alt=""
                className="dashboard-image"
              />
              <li className="list-1">Dasboard</li>
            </div>
            <div className="feed">
              <img src="./images/feed.png" alt="feed" className="feed-image" />
              <li>Feed</li>
            </div>
            <div className="feed">
              <img
                src="./images/Group 859.png"
                alt="feed"
                className="feed-image"
              />
              <li>Inbox</li>
            </div>
            <div className="feed">
              <img src="./images/Group.png" alt="feed" className="feed-image" />
              <li>Group</li>
            </div>
            <div className="feed-meetings">
              <img
                src="./images/Vector.png"
                alt="feed"
                className="feed-image"
              />
              <li>Meetings</li>
            </div>
            <div className="feed">
              <img
                src="./images/Group 842.png"
                alt="feed"
                className="feed-image"
              />
              <li>Events</li>
            </div>
            <div className="feed-last">
              <img
                src="./images/Group 80.png"
                alt="feed"
                className="feed-image"
              />
              <li className="myproject">My Projects</li>
            </div>
          </ul>
        </div>
        <div className="bottom">
          <div className="circle-out">
            <div className="circlein"></div>
          </div>

          <div className="data-top">
            <h5>Idea-driven tool</h5>
            <p className="para-1">
              Do you have any criative idea of how to add power to our
              TrackThor? Feel free to contact us
            </p>
          </div>
          <div className="data-bottom">
            <p className="message">Write Message</p>
          </div>
        </div>
        
      </div>
      <div className="topbar">
          <h3 className="goodmorningtext">Good Morning, {firstname}</h3>
          <p className="workboard">This is your Work Dashboard</p>
          <Content/>
          <Calender/>
          <Bottom/>
      </div>
      
      </div>
      
    </>
  );
};

export default Aside;
