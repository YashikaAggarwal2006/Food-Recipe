import React from "react";
import { useState } from "react";
import MealCards from "./MealCards";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const searchfunc = async () => {
    try {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsondata = await get.json();
      setData(jsondata.meals);
    } catch (error) {
      console.error("error fetching meals", error);
    }
  };

  const randomfunc = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    const jsondata = await get.json();
    setData(jsondata.meals);
  };

  const letterfunc = async (letter) =>{
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    const jsondata = await get.json();
    setData(jsondata.meals);
  };

  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <>
      <h1>FOOD RECIPE APPLICATION</h1>
      <div className="container">
        <div className="searchbar">
          <input
            type="text"
            placeholder="enter your dish"
            onChange={handleInput}
          />
          <button onClick={searchfunc}>search</button>
          <button onClick={randomfunc}>Surprise me !</button>
          
          <div className="letter">
            {
              alphabets.map((letter)=>(
                <button key={letter} onClick={()=> letterfunc(letter.toLocaleLowerCase())}>
                  {letter}

                </button>
              ))
            }
          </div>
        </div>
        <div>
          <MealCards detail={data} />
        </div>
      </div>
    </>
  );
};
export default MainPage;
