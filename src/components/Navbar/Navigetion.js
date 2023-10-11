import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./nav.css";

function Navigetion() {
  const [shop, setIsShop] = useState(false);
  const [learn, setLearn] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <span className="logo">Logo</span>
        <nav className="navbar">
          <ul
            className="links"
            onMouseEnter={() => setIsShop(!shop)}
            onMouseLeave={() => setIsShop(false)}
          >
            SHOP *
            {shop && (
              <div className="div">
                <li>under constraction</li>
                <li>under constraction</li>
                <li>under constraction</li>
                <li>under constraction</li>
                <li>under constraction</li>
                <li>under constraction</li>
              </div>
            )}
          </ul>

          <ul
            className="links"
            onMouseEnter={() => setLearn(!learn)}
            onMouseLeave={() => setLearn(false)}
          >
            LEARN *
            {learn && (
              <div className="div">
                <li>under constraction</li>
                <li>under constraction</li>
                <li>under constraction</li>
                <li>under constraction</li>
                <li>under constraction</li>
                <li>under constraction</li>
              </div>
            )}
          </ul>
          <ul className="links">HELP *</ul>
        </nav>
      </div>
      <div className="icons">
        <div className="shpoingcart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <div className="user">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </header>
  );
}

export default Navigetion;
