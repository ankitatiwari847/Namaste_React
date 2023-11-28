const DishItem = ({ dishData }) => {
  return (
    <div className="dish-item text-gray-600 flex items-center justify-between border-b-2 border-solid border-gray-300">
      <div className="dish-detail">
        <p className="dish-name text-sm mb-1">{dishData.name}</p>
        <p className="dish-price text-xs mb-2">₹{dishData.price / 100}</p>
      </div>
      <button className="h-7 w-16 text-center bg-white border-[1px] border-solid border-[#b7b9bb] rounded text-[forestgreen] shadow-sm">
        Add+
      </button>
    </div>
  );
};

export default DishItem;
