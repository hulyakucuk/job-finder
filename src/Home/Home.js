import React, { useState } from "react";
import Card from "./Card/Card";
import Value from "../Components/Value";
import Footer from "../Components/Footer";
import Search from "./SearchBar/Search";
import FilterPanel from "./FilterPanel/FilterPanel";

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectLocation = (event, value) =>
    !value ? null : setSelectedLocation(value);

  return (
    <div className="home">
      <div className="searchBar-wrap">
        <Search />
      </div>
      <div className="panel-container-wrap">
        <div className="filter-panel-wrap">
          <FilterPanel
            selectLocation={handleSelectLocation}
            selectedLocation={selectedLocation}
          />
        </div>
        <div className="container">
          <Card />
        </div>
      </div>
      <Value />
      <Footer />
    </div>
  );
};

export default Home;
