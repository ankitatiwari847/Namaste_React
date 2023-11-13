const DishItem = ({ dishData }) => {
  return (
    <div className="dish-item">
      <div className="dish-detail">
        <p className="dish-name">{dishData.name}</p>
        <p className="dish-price">₹{dishData.price / 100}</p>
      </div>
      <button>Add+</button>
    </div>
  );
};

export default DishItem;
