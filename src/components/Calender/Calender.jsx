import React from "react";
import "./calender.css";
const Calender = () => {
  return (
    <>
      <div className="d-flex flex-row calender">
      <div className="september">
        <div className="head">
          <h6 className="months">September</h6>
        </div>
        <div className="d-flex flex-row dates-1">
          <p className="dates">10</p>
          <p className="dates">11</p>
        </div>
        <div className="d-flex flex-row week-1">
          <p>Mon</p>
          <p>Tue</p>
        </div>
        
      </div>
      <div className="september-1">
        <div className="head-1">
          <h6 className="months">October</h6>
        </div>
        <div className="d-flex flex-row dates">
          <p className="dates">12</p>
          <p className="dates">13</p>
          <p className="dates">14</p>
        </div>
        <div className="d-flex flex-row week">
          <p>Wed</p>
          <p>Thu</p>
          <p>Fri</p>
        </div>
        
      </div><div className="september-2">
        <div className="head-2">
          <h6 className="months-2">November</h6>
        </div>
        <div className="d-flex flex-row dates">
          <p className="dates-1">15</p>
          <p className="dates-1">16</p>
          <p className="dates-2">17</p>
        </div>
        <div className="d-flex flex-row week">
          <p>Sat</p>
          <p>Sun</p>
          <p>Mon</p>
        </div>
        
      </div><div className="september-3">
        <div className="head-2">
          <h6 className="months">December</h6>
        </div>
        <div className="d-flex flex-row dates">
          <p className="dates-3">18</p>
          <p className="dates-3">19</p>
          <p className="dates-3">20</p>
        </div>
        <div className="d-flex flex-row week">
          <p>Tue</p>
          <p>Wed</p>
          <p>Thu</p>
        </div>
        
      </div>
      <div className="september-4">
        <div className="head-2">
          <h6 className="months">January</h6>
        </div>
        <div className="d-flex flex-row dates">
          <p className="dates-3">21</p>
          <p className="dates-4">22</p>
        </div>
        <div className="d-flex flex-row week">
          
          <p>Fri</p>
          <p>Sat</p>
        </div>
        
      </div>
      </div>
      
    </>
  );
};

export default Calender;
