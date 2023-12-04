import { UseSelector, useSelector } from "react-redux";
import DishItem from "./DishItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className="cart-page w-6/12 m-auto">
      {cart.length > 0 ? (
        cart.map((data) => <DishItem key={data.id} dishData={data} />)
      ) : (
        <p>
          Cart is empty... click here to go to menu{" "}
          <Link className="text-red-400" to="/">
            here
          </Link>
        </p>
      )}
    </div>
  );
};

export default Cart;
