import React from "react";
import { NavLink } from "react-router-dom";

const MealCards = ({ detail }) => {
  console.log(detail);

  return (
    <div className="meals">
      {!detail ? (
        <p>no meals found</p>
      ) : (
        detail.map((curItem) => (
          <div>
            <img src={curItem.strMealThumb} />
            <p>{curItem.strMeal} </p>
            <NavLink to={`/${curItem.idMeal}`}>
              <button>view recipe</button>
            </NavLink>
          </div>
        ))
      )}
    </div>
  );
};
export default MealCards;
