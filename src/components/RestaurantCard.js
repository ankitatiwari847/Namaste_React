import { CDN_LINK, STAR } from "../../utils/constant";
const RestaurantCard = (props) => {
  let {
    name,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    areaName,
    sla,
  } = props.restaurantDetail;

  let bg = `url(${CDN_LINK.concat(cloudinaryImageId)})`;

  return (
    <div className="min-h-120 w-50 rounded hover:cursor-pointer hover:shadow-md hover:scale-105 rounded-md overflow-hidden">
      <div
        id="restaurant-logo"
        className="h-32 w-50 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: bg,
        }}
      ></div>
      <h3 className="px-2 restaurant-name my-1 mx-0 text-md font-bold">
        {name}
      </h3>
      <div className=" px-2 flex items-center justify-between text-xs  font-semibold">
        <div className="flex items-center justify-between text-xs  font-semibold">
          <img className="h-5 w-5" src={STAR} />
          <span>{avgRating}</span>
        </div>
        <span className="px-2 delivery-time">{sla.slaString}</span>
      </div>
      <p className="px-2 my-1 text-xs overflow-ellipsis overflow-hidden whitespace-nowrap">
        {...cuisines.join(", ")}
      </p>
      <p className="px-2 pb-4 my-1 text-xs overflow-ellipsis overflow-hidden whitespace-nowrap">
        {costForTwo}
      </p>
    </div>
  );
};

export const VegRestaurant = (RestaurantCard) => {
  return ({ restaurantDetail }) => {
    return (
      <div>
        <div className="mt-1 hover:scale-105 ml-1 absolute h-5 w-5 border-solid border-green-400 border-2 flex items-center justify-center">
          <span className=" absolute bg-green-400 rounded-xl h-3 w-3 m-auto"></span>
        </div>
        <RestaurantCard restaurantDetail={restaurantDetail} />
      </div>
    );
  };
};

export default RestaurantCard;
