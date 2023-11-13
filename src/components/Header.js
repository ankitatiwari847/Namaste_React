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
    <div className="header">
      <Link to="/">
        <img className="logo" alt="logo" src={LOGO} />
      </Link>
      <div className="search">
        <input
          className="search"
          type="text"
          placeholder="search restaurant"
          value={searchField}
          onChange={(e) => {
            setSearchField(e.target.value);
            searchRestaurant();
          }}
        />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {
          // show card when the login btn is set to logout i.e. the user is already loged in
          loginBtn === "Logout" && (
            <li>
              <Link to="/cart">
                <img className="cart" src={CART_LOGO}></img>
              </Link>
            </li>
          )
        }
        <Link to={loginBtn !== "Login" ? "/" : "/login"}>
          <li
            className="login-btn"
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
