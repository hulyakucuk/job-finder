import React from "react";
import Card from "../Home/Card/Card";
import Value from "../Components/Value";
import Footer from "../Components/Footer";
import Search from "../Home/SearchBar/Search";
import FilterPanel from "../Home/FilterPanel/FilterPanel";

export default function Home() {
  return (
    <>
      <Search />
      <FilterPanel></FilterPanel>
      <div className="container">
        <Card />
      </div>
      <Value />
      <Footer />
    </>
  );
}
