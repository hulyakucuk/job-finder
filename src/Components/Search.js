import React from "react";


export default function Search() {
  return (
    <>
      <div className="bigger-div">
        <div className="inner-div">
            <div className="search-job input">
              <label htmlFor="job">job</label>
              <input  type="text" placeholder="search job.." ></input>
            </div>
            <div className="search-company input">
            <label htmlFor="company">company</label>
              <input type="text" placeholder="search company.." ></input>
            </div>
            <div className="search-location input">
            <label htmlFor="location">location</label>
              <input  type="text" placeholder="location.." ></input>
            </div>
            <div className="search-btn">
            <button>
              Search
            </button>
            </div>
           
        </div>
        
      </div>
    </>
  );
}
