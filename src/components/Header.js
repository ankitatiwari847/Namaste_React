import { useState } from "react";
import { LOGO, CART_LOGO } from "../../utils/constant";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const cart = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center shadow-md mb-2 sticky top-0 z-10 bg-white px-[10%]">
      <Link to="/">
        <img className="logo h-20 m-2" alt="logo" src={LOGO} />
      </Link>

      <ul className="flex items-center mr-3">
        <li className="mx-2 text-base font-medium">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-2 text-base font-medium">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="mx-2 text-base font-medium">
          <Link to="/contact">Contact us</Link>
        </li>
        <li className="mx-2 text-base font-medium">
          <Link to="/about">About</Link>
        </li>
        {
          // show card when the login btn is set to logout i.e. the user is already loged in
          //loginBtn === "Logout" && (
          <li className="mx-2 text-base font-medium">
            <Link className="flex relative" to="/cart">
              <img className="cart h-7 w-7" src={CART_LOGO}></img>
              {cart.length > 0 && (
                <span className="absolute bottom-[18px] left-[25px] font-semibold text-red-500">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
          //)
        }
        <Link to={loginBtn !== "Login" ? "/" : "/login"}>
          <li
            className="login-btn mx-2 text-base font-medium"
            onClick={() =>
              setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")
            }
          >
            {loginBtn}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
