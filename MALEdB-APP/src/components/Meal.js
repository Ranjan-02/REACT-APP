import React, { useState } from "react";
import Mealitem from "./Mealitem";
import "../App.css";
const Meal = () => {
  const [search, setSearch] = useState("");
  const [Mymeal, setMeal] = useState();
  const searchMeal = (evt) => {
    console.log(evt);
    if (evt.key === "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals);
          setSearch("");
        });
    }
  };
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search Food Recipe</h1>
          <h4>Here we Gooo!</h4>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            hellow={searchMeal}
          />
        </div>
        <div className="container">
          {Mymeal == null ? (
            <p className="notSearch">Not found</p>
          ) : (
            Mymeal.map((res) => {
              return <Mealitem data={res} />;
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Meal;
