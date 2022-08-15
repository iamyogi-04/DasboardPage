import React from "react";
import "./content.css";
const Content = () => {
  return (
    <>
      <div className="container-1">
        <div className="background"></div>
        <div className=" d-flex flex-row card">
          <div className=" d-flex flex-column card-1">
            <div className="heading">
              <h6>Log Time</h6>
            </div>
            <div className="bars">
              <div className=" d-flex flex-row bar-1">
                <img
                  src="./images/Group 824.png"
                  alt="time"
                  className="clock"
                />
                <p className="nametag">Kumash Shah</p>
                <div className="time">
                  <p className="hour">4 hr</p>
                </div>
              </div>
              <div className=" d-flex flex-row bar-1">
                <img
                  src="./images/Group 824.png"
                  alt="time"
                  className="clock"
                />
                <p className="nametag">Vivek Kumar</p>
                <div className="time">
                  <p className="hour">2 hr</p>
                </div>
              </div>
              <div className="d-flex flex-row bar-1">
                <img
                  src="./images/Group 824.png"
                  alt="time"
                  className="clock"
                />
                <p className="nametag">Amit Kumar</p>
                <div className="time">
                  <p className="hour">2 hr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" d-flex flex-row card">
          <div className=" d-flex flex-column card-1">
            <div className="heading">
              <h6>Calender</h6>
            </div>
            <div className="bars">
              <div className=" d-flex flex-row bar-1">
                <img
                  src="./images/Group 1018.png"
                  alt="time"
                  className="clock"
                />
                <p className="nametag">Webflow Meet</p>
                <div className="time">
                  <p className="hour">22.14</p>
                </div>
              </div>
              <div className=" d-flex flex-row bar-1">
                <img
                  src="./images/Group 1018.png"
                  alt="time"
                  className="clock"
                />
                <p className="nametag">Lumma Classes</p>
                <div className="time">
                  <p className="hour">01.12</p>
                </div>
              </div>
              <div className="d-flex flex-row bar-1">
                <img
                  src="./images/Group 1018.png"
                  alt="time"
                  className="clock"
                />
                <p className="nametag">Call with Natlie</p>
                <div className="time">
                  <p className="hour">04. 20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" d-flex flex-row card">
          <div className=" d-flex flex-column card-1">
            <div className="heading">
              <h6>Documents</h6>
            </div>
            <div className="bars">
              <div className=" d-flex flex-row bar-1">
                <img
                  src="./images/Group 833.png"
                  alt="time"
                  className="clock"
                />
                <p className="nametag">VL Web 203</p>
                <div className="time">
                  <p className="hour">v</p>
                </div>
              </div>
              <div className=" d-flex flex-row bar-1">
                <img
                  src="./images/Group 833.png"
                  alt="time"
                  className="clock"
                />
                <p className="nametag">VL Web 203</p>
                <div className="time">
                  <p className="hour">v</p>
                </div>
              </div>
              <div className="d-flex flex-row bar-1">
                <img
                  src="./images/Group 833.png"
                  alt="time"
                  className="clock"
                />
                <p className="nametag">VL Web 204</p>
                <div className="time">
                  <p className="hour">v</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
