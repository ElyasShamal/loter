import React from "react";
import product from "../images/product.png";

function Section() {
  return (
    <section className="section">
      <h2>Woozoo</h2>
      <p>Woozoo 5-speed Globe Fan 5 Year Warranty </p>
      <p>
        “It’s quieter and significantly more powerful than any other fans
        <br></br>
        it uses half as much energy to get
        <br></br> the job done.”
      </p>
      <img
        src={product}
        alt="Fun "
        height="200px"
        style={{ marginTop: "30px", cursor: "pointer" }}
      />
      <br></br>
      <button className="sectionbtn">Shop Now</button>
    </section>
  );
}

export default Section;
