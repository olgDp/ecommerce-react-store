import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__menu">
          {/* <svg className="icon">
            <use xlinkHref="/img/sprite.svg#menu" stroke="#fff" />
          </svg> */}
          Menu
        </div>
        {/* <Link to="/" className="header__logo">
          M I N I M A L
        </Link> */}
        <div className="header__cart">
          {/* <svg className="icon">
            <use xlinkHref="/img/sprite.svg#shopping-bag" stroke="#fff" />
          </svg> */}
          Cart
        </div>
      </div>
    </header>
  );
};

export default Header;
