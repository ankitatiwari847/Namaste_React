import { useState } from "react";
import { LOGO, CART_LOGO } from "../../utils/constant";
import restaurantData from "../../utils/restaurant-data";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchField, setSearchField] = useState("");
  const [loginBtn, setLoginBtn] = useState("Login");

  //Find restaurants with name
  const searchRestaurant = () => {
    let filteredRestaurant = restaurantData.filter((data) => {
      return data.info.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  return (
    <div className="flex justify-between items-center shadow-md mb-2 sticky top-0 z-10 bg-white px-[10%]">
      <Link to="/">
        <img className="logo h-24" alt="logo" src={LOGO} />
      </Link>
      <div className="search">
        <input
          className="search font-light text-sm text-gray-600  bg-[url('utils/images/search_icon.svg')] bg-no-repeat bg-right border h-7 px-3 py-1 focus:outline-none"
          type="text"
          placeholder="search restaurant"
          value={searchField}
          onChange={(e) => {
            setSearchField(e.target.value);
            searchRestaurant();
          }}
        />
      </div>
      <ul className="flex items-center mr-3">
        <li className="mx-2 text-base font-">
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
          loginBtn === "Logout" && (
            <li className="mx-2 text-base font-medium">
              <Link to="/cart">
                <img className="cart h-7 w-7" src={CART_LOGO}></img>
              </Link>
            </li>
          )
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
