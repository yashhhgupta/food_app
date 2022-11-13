import { Fragment } from "react";
import { Link } from "react-router-dom";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/">
          <h1 style={{ color: "white" }}>KHAALO</h1>
        </Link>
        <Link to="meals">
          <h2 style={{ color: "white" }}>Meals</h2>
        </Link>
        <Link to="cart">
          <HeaderCartButton />
        </Link>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
