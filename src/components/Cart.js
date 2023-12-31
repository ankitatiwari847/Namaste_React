import { UseSelector, useDispatch, useSelector } from "react-redux";
import DishItem from "./DishItem";
import { Link } from "react-router-dom";
import { emptyCart } from "../../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div className="cart-page w-6/12 m-auto min-h-[80vh]">
      {cart.length > 0 ? (
        <>
          <button onClick={handleClearCart}>Clear cart</button>
          {cart.map((data) => (
            <DishItem key={data.id} dishData={data} />
          ))}
        </>
      ) : (
        <p className="text-xl py-7">
          Cart is empty... click{" "}
          <Link className="text-red-400" to="/">
            here
          </Link>{" "}
          here to go to menu
        </p>
      )}
    </div>
  );
};

export default Cart;
