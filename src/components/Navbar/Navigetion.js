import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faSearch,
  faAngleDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Home from "../Home/Home";
import Menu from "../Home/Menu";

function Navigetion() {
  const [shop, setIsShop] = useState(false);
  const [learn, setLearn] = useState(false);
  const [help, setHelp] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Router>
      <div>
        <header className="header">
          <div className="container">
            <Link to="/" className="links">
              <span className="logo">Logo</span>
            </Link>

            <nav className="navbar">
              <ul
                className="links"
                onMouseEnter={() => setIsShop(!shop)}
                onMouseLeave={() => setIsShop(false)}
              >
                SHOP <FontAwesomeIcon icon={faAngleDown} />
                {shop && (
                  <div className="div">
                    <div onClick={() => setIsShop(!shop)}>
                      <Link to="/Menu" className="links">
                        <li>Home</li>
                      </Link>

                      <li>under constraction</li>
                      <li>under constraction</li>
                      <li>under constraction</li>
                      <li>under constraction</li>
                      <li>under constraction</li>
                      <li>under constraction</li>
                      <li>under constraction</li>
                    </div>
                  </div>
                )}
              </ul>

              <ul
                className="links"
                onMouseEnter={() => setLearn(!learn)}
                onMouseLeave={() => setLearn(false)}
              >
                LEARN <FontAwesomeIcon icon={faAngleDown} />
                {learn && (
                  <div className="div">
                    <div onClick={() => setLearn(!learn)}>
                      <li>under constraction</li>
                      <li>under constraction</li>
                      <li>under constraction</li>
                      <li>under constraction</li>
                    </div>
                  </div>
                )}
              </ul>
              <ul
                className="links"
                onMouseEnter={() => setHelp(!help)}
                onMouseLeave={() => setHelp(false)}
              >
                HELP <FontAwesomeIcon icon={faAngleDown} />
                {help && (
                  <div className="div">
                    <div onClick={() => setHelp(!help)}>
                      <li>under constraction</li>
                      <li>under constraction</li>
                      <li>under constraction</li>
                      <li>under constraction</li>
                      <li>under constraction</li>
                      <li>under constraction</li>
                      <li>under constraction</li>
                      <li>under constraction</li>
                    </div>
                  </div>
                )}
              </ul>
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
            <div className="fabars">
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => setShowMenu(!showMenu)}
              />
            </div>
          </div>
        </header>
        {/* hanburger menu */}
        {showMenu && (
          <div className="open">
            <ul className="open-menu" onClick={() => setIsShop(!shop)}>
              SHOP <FontAwesomeIcon icon={faAngleDown} />
              {shop && (
                <div className="div">
                  <div onClick={() => setShowMenu(!showMenu)}>
                    <li>under constraction</li>
                    <li>under constraction</li>
                    <li>under constraction</li>
                    <li>under constraction</li>
                    <li>under constraction</li>
                    <li>under constraction</li>
                    <li>under constraction</li>
                    <li>under constraction</li>
                  </div>
                </div>
              )}
            </ul>
            <ul className="open-menu" onClick={() => setLearn(!learn)}>
              LEARN <FontAwesomeIcon icon={faAngleDown} />
              {learn && (
                <div className="div">
                  <li>under constraction</li>
                  <li>under constraction</li>
                  <li>under constraction</li>
                  <li>under constraction</li>
                </div>
              )}
            </ul>
            <ul
              className="open-menu"
              onClick={() => setHelp(!help)}
              onMouseLeave={() => setHelp(false)}
            >
              HELP <FontAwesomeIcon icon={faAngleDown} />
              {help && (
                <div className="div">
                  <li>under constraction</li>
                  <li>under constraction</li>
                  <li>under constraction</li>
                  <li>under constraction</li>
                </div>
              )}
            </ul>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigetion;
