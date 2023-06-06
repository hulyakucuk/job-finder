import React from "react";
import SearchIcon from "@material-ui/icons/Search";
export default function Search({ value, searchInput }) {
  return (
    <>
      <div className="bigger-div">
        <div className="inner-div">
          <div className="search-job input">
            <label htmlFor="job">job</label>
            <input
              type="text"
              placeholder="search job.."
              value={value}
              // onChange={changeInput}
            ></input>
          </div>
          <div className="search-company input">
            <label htmlFor="company">company</label>
            <input
              type="text"
              placeholder="search company.."
              value={value}
              //  onChange={changeInput}
            ></input>
          </div>
          <div className="search-location input">
            <label htmlFor="location">location</label>
            <input
              type="text"
              placeholder="location.."
              value={value}
              //  onChange={changeInput}
            ></input>
          </div>
          <div className="search-btn">
            <button>
              <SearchIcon className="searchBar-icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
