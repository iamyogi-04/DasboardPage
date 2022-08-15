import React from "react";
import { useState, useEffect } from "react";
import Aside from "../Aside/Aside";
import './homepage.css'

const Homepage = () => {
  const [emailid, setEmailid] = useState();
  const [firstname, setFirstname] = useState();

  const getemail = () => {
    let Email = sessionStorage.getItem("email");
    setEmailid(Email);
    let Name = sessionStorage.getItem("first_name");
    setFirstname(Name);
  };

  useEffect(() => {
    getemail();
  });

  return (
    <>
      <div classNameName="conatiner">
        <nav className="navbar navbar-expand-lg style={background-color: #e3f2fd}">
          <div className="container-fluid">
            <div className="d-flex flex-column">
                <img src="./images/download 1.png" alt="logo" className="demo"/>
                <p className="tagline">FOR WORK</p>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <div className="d-flex flex-row align-items-center">
                    <div className="box">
                        <h3 className="box-text">T</h3>
                    </div>
                    <div className="techno">
                    <h6 className="text-techno">Techno Pvt. Ltd</h6>
                    <p className="text-494">494 employees</p>
                    </div>
                  </div>
                </li>
                </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" className="search-icon" alt="Search"/>
              </form>
              <div className="d-flex flex-row profile">
                <div className="rectangle">
                <img src="https://img.icons8.com/plasticine/100/000000/gender-neutral-user--v1.png" className="user-profile" alt="profileimg"/>
                </div>
                <div className="d-flex flex-column">
                    <div className="name">
                        {firstname}
                    </div>
                    <div className="mailid">
                        {emailid}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      <Aside firstname={firstname}/>
      
    </>
  );
};

export default Homepage;
