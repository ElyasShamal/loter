import React, { useEffect, useState } from "react";
import textContent from "./textContents";
import Section from "./Section";

import image1 from "../images/image-1.jpg";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const images = [image1, image2, image3];
  const texts = textContent;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 36000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <main className="main-container">
      <div className="background-image">
        <img className="image" src={images[currentImage]} alt="background" />
        <div className="advertisment">
          <p>
            {texts[currentText]} <span className="span">Deals</span>
          </p>
          <section className="grid">
            <div>
              <div className="flex">
                <h3>Mens</h3>
              </div>
              <img src={image1} style={{ width: "100%" }} />
              <button>Shop Now</button>
            </div>
            <div>
              <div className="flex">
                <h3>Womans</h3>
              </div>
              <img src={image2} style={{ width: "100%" }} />
              <button>Shop Now</button>
            </div>
            <div>
              <div className="flex">
                <h3>Kids</h3>
              </div>
              <img src={image3} style={{ width: "100%" }} />
              <button>Shop Now</button>
            </div>
            <div>
              <div className="flex">
                <h3>Electronics</h3>
              </div>
              <img src={image1} style={{ width: "100%" }} />
              <button>Shop Now</button>
            </div>
          </section>
        </div>
      </div>
      <Section />
    </main>
  );
}

export default Home;
