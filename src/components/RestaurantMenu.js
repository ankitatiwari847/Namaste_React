import { useEffect, useState } from "react";
import { STAR } from "../../utils/constant";
//import TopPick from "./TopPicks";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resData = useRestaurantMenu(resId);

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

  let categoryItem = menuList.filter(
    (singleCategory) =>
      singleCategory?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="res-menu-wrap my-5  w-6/12 m-auto">
      {/*Restaurant details */}
      <div className="res-menu-header flex justify-between border-b-2 border-dashed border-gray-400 pb-2">
        <div className="res-detail">
          <h4 className="m-auto mb-1 text-xl font-semibold">
            {resDetails.name}
          </h4>
          <p className="m-auto text-xs">{resDetails.cuisines.join(",")}</p>
          <p className="m-auto text-xs">{resDetails.areaName}</p>
        </div>
        <div className="rating-wrap border-solid border-1 border-[#e7e5e5] rounded p-2 shadow-md self-center">
          <div className="rating justify-between items-center flex border-b-2 border-solid border-gray-400 ">
            <img className="rating-star h-5 w-5" src={STAR} />
            <span>{resDetails.avgRating}</span>
          </div>
          <div className="rating-count text-[8px]">
            {resDetails.totalRatingsString}
          </div>
        </div>
      </div>

      {/*Deals */}
      <div className="deals-wrap no-scrollbar border-b-1 border-dashed border-[#d3d3d3] pb-5 overflow-x-scroll">
        <div className="deals-heading flex m-2 ml-0">
          <h4>{resDetails.sla.slaString}</h4>
          <h4>{resDetails.costForTwoMessage}</h4>
        </div>
        <div className="deals flex">
          {deals?.length > 0 ? (
            deals.map((deal, index) => {
              return (
                <div
                  className="mt-[2px] mr-4 mb-0 ml-0 border-2 border-solid border-[#e9e9eb] rounded  items-center p-1 min-w-[100px]"
                  key={index}
                >
                  <h6 className="m-0">{deal.info.couponCode}</h6>
                  <p className="text-[9px] mt-1 mr-0 mb-0 ml-0 ">
                    {deal.info.description}
                  </p>
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
        {categoryItem.map((data, index) => {
          return (
            <div key={data?.card?.card?.title} className="category-menu mb-5">
              <MenuCard
                cardData={data?.card?.card}
                showItem={index === showIndex ? true : false}
                setShowIndex={() =>
                  setShowIndex((prevIndex) =>
                    index === prevIndex ? null : index
                  )
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
