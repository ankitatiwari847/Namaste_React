import { useState } from "react";
import { LOGO, CART_LOGO } from "../../utils/constant";
import restaurantData from "../../utils/restaurant-data";

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
      <img className="logo" alt="logo" src={LOGO} />
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
        <li>Home</li>
        <li>Contact us</li>
        <li>About</li>
        {
          // show card when the login btn is set to logout i.e. the user is already loged in
          loginBtn === "Logout" && (
            <li>
              <img className="cart" src={CART_LOGO}></img>
            </li>
          )
        }
        <li
          className="login-btn"
          onClick={() => setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")}
        >
          {loginBtn}
        </li>
      </ul>
    </div>
  );
};

export default Header;
