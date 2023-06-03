import React from "react";

export default function Search() {
  return (
    <>
      <div className="bigger-div">
        <div className="inner-div">
          <div className="search-job input">
            <label htmlFor="job">job</label>
            <input type="text" placeholder="search job.."></input>
          </div>
          <div className="search-company input">
            <label htmlFor="company">company</label>
            <input type="text" placeholder="search company.."></input>
          </div>
          <div className="search-location input">
            <label htmlFor="location">location</label>
            <input type="text" placeholder="location.."></input>
          </div>
          <div className="search-btn">
            <button>Search</button>
          </div>

        </div>
        <div className="section-div">
            <div className="filter-div">
            <label htmlFor="sort">Sort by:</label>
            <select name="" id="sort">
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Starts with</option>
              <option value="">Contains</option>
            </select>
            </div>
       <div className="filter-div">
       <label htmlFor="type">Type:</label>
       <select id="type" name="">
              <option value="full-time">Full-time</option>
              <option value="full-time">Remote</option>
              <option value="full-time">Contract</option>
              <option value="full-time">Part-time</option>
            </select>
       </div>
       <div className="filter-div" >
        <label htmlFor="level" >Level:</label>
        <select id="level">
          <option value="">Senior</option>
          <option value="">Begginner</option>
          <option value="">Intermediate</option>
          <option value="">Adocate</option>
        </select>
       </div>
       <div className="clear-all-btn filter-div">
            <button>Clear-all</button>
          </div>
          </div>
      </div>
    </>
  );
}
