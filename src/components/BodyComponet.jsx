import { RestauranCard } from "./RestauranCard";
import { resData } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//body Componet
export const BodyComponet = () => {
  //create state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurants(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdRestaurants = listOfRestaurants.filter(
              (item) => item.rating > 4
            );
            setListOfRestaurants(filterdRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((item) => (
          <RestauranCard key={item.info.id} data={item} />
        ))}
      </div>
    </div>
  );
};
