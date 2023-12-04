import { CDN_LINK } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../../utils/cartSlice";

const DishItem = ({ dishData }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div className="py-8 first-letter:dish-item text-gray-600 flex items-center justify-between border-b-2 border-solid border-gray-300">
      <div className="dish-detail">
        <p className="dish-name text-sm font-semibold mb-1">{dishData.name}</p>
        <p className="dish-price text-xs font-semibold mb-2">
          ₹{dishData.price / 100}
        </p>
        <p className="text-xs text-gray-400">{dishData.description}</p>
      </div>
      <div className="shrink-0 relative">
        <img
          className="h-24 w-28"
          src={
            dishData.imageId
              ? CDN_LINK + dishData.imageId
              : "https://saturdaykitchenrecipes.com/wp-content/uploads/bfi_thumb/default-recipe-image-6uur454bgjjl4o348g7wxmd97cod18f4h9b7kwffjo0.gif"
          }
        />
        <button
          className="absolute right-[25%] top-[85%] h-7 w-16 text-center bg-white border-2 border-solid border-[forestgreen] rounded text-[forestgreen] shadow-sm"
          onClick={() => handleAddToCart(dishData)}
        >
          Add+
        </button>
      </div>
    </div>
  );
};

export default DishItem;
