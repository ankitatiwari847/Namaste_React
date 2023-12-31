import { useEffect, useState } from "react";
import restaurantData from "../../utils/restaurant-data";
import RestaurantCard, { VegRestaurant } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import restaurantData from "../../utils/restaurant-data";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState();
  const [filtered, setFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  let fetchRestList = async () => {
    console.log("FETCH RESTAURANT LIST");
    let fetchedData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let data = await fetchedData.json();
    let fetchAPIList =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || restaurantData;
    setRestaurantList(fetchAPIList);
    setFilteredRestaurant(fetchAPIList);
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
      setFilteredRestaurant(topRestaurants);
    } else {
      setFilteredRestaurant(restaurantData);
    }
    setFiltered(!filtered);
  };

  const VegRestaurantCard = VegRestaurant(RestaurantCard);

  return (
    <div className="res-body w-10/12 m-auto min-h-[80vh]">
      {restaurantList !== "undefined" && restaurantList?.length > 0 ? (
        <>
          <div className="filter flex items-center mb-3 mt-7">
            <button
              className="flex py-2 px-4 mt-1 mr-3 mb-2  bg-white border-solid border-2 border-gray-700 rounded-2xl text-sm items-center"
              onClick={() => filterRestaurant()}
            >
              Top Rated{" "}
              {filtered && (
                <img
                  className="h-3 w-3 ml-2"
                  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
                />
              )}
            </button>
            <div className="ml-5 flex justify-center">
              <input
                data-testid="searchInput"
                type="text"
                className="search-box border border-solid border-slate-200 mr-2 focus:outline-0 rounded-lg p-1 "
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              ></input>
              <button
                onClick={() => {
                  const filteredRestaurants = restaurantList.filter(
                    (restaurant) =>
                      restaurant.info.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurant(filteredRestaurants);
                }}
              >
                <img
                  className="h-8"
                  src="https://cdn4.iconfinder.com/data/icons/commenly-needed/400/Icon-12-512.png"
                  alt="search"
                />
              </button>
            </div>
          </div>
          <div className="restaurant-card-wrap grid grid-cols-5 gap-7 mt-12">
            {filteredRestaurant.map((data) => {
              return (
                <Link key={data.info.id} to={"/restaurant/" + data.info.id}>
                  {data.info.veg ? (
                    <VegRestaurantCard restaurantDetail={data.info} />
                  ) : (
                    <RestaurantCard restaurantDetail={data.info} />
                  )}
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
