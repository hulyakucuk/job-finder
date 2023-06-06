import React from "react";
import SliderProton from "../../assets/SliderProton";

export default function FilterPanel() {
  return (
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
          <option value="deneme-time">Remote</option>
          <option value="full-time">Contract</option>
          <option value="full-time">Part-time</option>
        </select>
      </div>
      <div className="filter-div">
        <label htmlFor="level">Level:</label>
        <select id="level">
          <option value="">Senior</option>
          <option value="">Begginner</option>
          <option value="">Intermediate</option>
          <option value="">Adocate</option>
        </select>
      </div>
      <div className="label-range">
        <label>Price Range</label>
        <SliderProton className="range-btn" />
      </div>
      <div className="clear-all-btn filter-div">
        <button>Clear-all</button>
      </div>
    </div>
  );
}
