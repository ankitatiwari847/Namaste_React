import { useEffect, useState } from "react";
import restaurantData from "../../utils/restaurant-data";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

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

  useEffect(() => {
    fetchRestList();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline... Please check your internet connection
      </h1>
    );
  }

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
      {restaurantList !== "undefined" && restaurantList?.length > 0 ? (
        <>
          <button
            className="flex py-1 px-2 mt-1 mr-1 mb-2 ml-6 bg-white border-solid border-2 border-gray-700 rounded-2xl text-sm items-center"
            onClick={() => filterRestaurant()}
          >
            Top Rated{" "}
            {filtered && (
              <img
                className="h-3 w-3"
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
              />
            )}
          </button>
          <div className="restaurant-card-wrap grid grid-cols-6 gap-3">
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
