import { useEffect, useState } from "react";
import restaurantData from "../../utils/restaurant-data";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState();
  const [filtered, setFiltered] = useState(false);

  let fetchRestList = async () => {
    let fetchedData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    let data = await fetchedData.json();
    let fetchAPIList =
      data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(fetchAPIList);
  };

  useEffect(async () => {
    fetchRestList();
  }, []);

  //Show only restaurant will rating>4
  let filterRestaurant = () => {
    if (!filtered) {
      let topRestaurants = restaurantData.filter(
        (data) => data.info.avgRating > 4
      );
      setRestaurantList(topRestaurants);
    } else {
      setRestaurantList(restaurantData);
    }
    setFiltered(!filtered);
  };
  return (
    <div className="res-body">
      {restaurantList !== "undfined" && restaurantList?.length > 0 ? (
        <>
          <button
            className="filter-top-rated"
            onClick={() => filterRestaurant()}
          >
            Top Rated{" "}
            {filtered && (
              <img
                className="close-icon"
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
              />
            )}
          </button>
          <div className="restaurant-card-wrap">
            {restaurantList.map((data) => {
              return (
                <Link key={data.info.id} to={"/restaurant/" + data.info.id}>
                  <RestaurantCard restaurantDetail={data.info} />
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
