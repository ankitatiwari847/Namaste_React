import { useState } from "react";
import DishItem from "./DishItem";
import TopPick from "./TopPicks";

const MenuCard = ({ cardData }) => {
  //console.log(cardData.itemCards);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="category-wise-menu">
      <div className="category-title">
        <h4>{cardData.title}</h4>
        <img
          onClick={() => setShowMenu(!showMenu)}
          src={
            showMenu
              ? "https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/up-top-arrow-512.png"
              : "https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/down-bottom-arrow-256.png"
          }
        />
      </div>
      {cardData.title === "Top Picks" && (
        <TopPick topPickData={cardData.carousel} />
      )}
      {cardData.title !== "Top Picks" &&
        cardData?.itemCards &&
        showMenu &&
        cardData.itemCards.map((data) => {
          return <DishItem key={data.card.info.id} dishData={data.card.info} />;
        })}
    </div>
  );
};

export default MenuCard;
