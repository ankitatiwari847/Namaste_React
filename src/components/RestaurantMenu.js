import { useEffect, useState } from "react";
import { STAR } from "../../utils/constant";
//import TopPick from "./TopPicks";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resId}`
    );

    const menu = await data.json();
    setResData(menu.data);
  };

  if (
    resData === null ||
    resData?.cards[0]?.card?.card?.info === null ||
    resData?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers.length <=
      0 ||
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards <= 0
  )
    return <Shimmer />;

  //Restaurant details
  let resDetails = resData?.cards[0]?.card?.card?.info;

  //Deals data
  let deals =
    resData?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

  //Top pick data
  let menuList = resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="res-menu-wrap">
      {/*Restaurant details */}
      <div className="res-menu-header">
        <div className="res-detail">
          <h4>{resDetails.name}</h4>
          <p>{resDetails.cuisines.join(",")}</p>
          <p>{resDetails.areaName}</p>
        </div>
        <div className="rating-wrap">
          <div className="rating">
            <img className="rating-star" src={STAR} />
            <span>{resDetails.avgRating}</span>
          </div>
          <div className="rating-count">{resDetails.totalRatingsString}</div>
        </div>
      </div>

      {/*Deals */}
      <div className="deals-wrap">
        <div className="deals-heading">
          <h4>{resDetails.sla.slaString}</h4>
          <h4>{resDetails.costForTwoMessage}</h4>
        </div>
        <div className="deals">
          {deals?.length > 0 ? (
            deals.map((deal, index) => {
              return (
                <div key={index}>
                  <h6>{deal.info.couponCode}</h6>
                  <p>{deal.info.description}</p>
                </div>
              );
            })
          ) : (
            <div>No deals found</div>
          )}
        </div>
      </div>

      {/**Top picks and menu by category */}
      <div className="category-menu-wrap">
        {menuList.map((data, index) => {
          if (data?.card?.card?.title) {
            return (
              <div key={index} className="category-menu">
                <MenuCard cardData={data.card.card} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
