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
    <div className="restaurant-card">
      <div
        id="restaurant-logo"
        style={{
          backgroundImage: bg,
        }}
      ></div>
      <h3 className="restaurant-name">{name}</h3>
      <div className="time-rating-wrap">
        <div className="rating">
          <img className="rating-star" src={STAR} />
          <span>{avgRating}</span>
        </div>
        <span className="delivery-time">{sla.slaString}</span>
      </div>
      <p>{...cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
