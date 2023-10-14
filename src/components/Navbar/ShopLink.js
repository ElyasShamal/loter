import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function ShopLink() {
  const [shop, setIsShop] = useState(false);
  return (
    <ul
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
  );
}

export default ShopLink;
