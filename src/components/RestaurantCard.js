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
    <div className="min-h-100 w-48 rounded p-1 hover:cursor-pointer hover:shadow-md">
      <div
        id="restaurant-logo"
        className="h-28 w-44 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: bg,
        }}
      ></div>
      <h3 className="restaurant-name my-1 mx-0 text-md">{name}</h3>
      <div className="flex items-center justify-between text-xs  font-semibold">
        <div className="flex items-center justify-between text-xs  font-semibold">
          <img className="h-5 w-5" src={STAR} />
          <span>{avgRating}</span>
        </div>
        <span className="delivery-time">{sla.slaString}</span>
      </div>
      <p className="my-1 text-xs overflow-ellipsis overflow-hidden whitespace-nowrap">
        {...cuisines.join(", ")}
      </p>
      <p className="my-1 text-xs overflow-ellipsis overflow-hidden whitespace-nowrap">
        {costForTwo}
      </p>
    </div>
  );
};

export default RestaurantCard;
