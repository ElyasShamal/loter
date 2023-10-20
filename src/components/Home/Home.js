import React, { useEffect, useState } from "react";
import textContent from "./textContents";

import image1 from "../images/image-1.jpg";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";
import image4 from "../images/image-4.jpg";

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const images = [image1, image2, image3, image4];
  const texts = textContent;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 18000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <main className="main-container">
      <div className="background-image">
        <img className="image" src={images[currentImage]} alt="background" />
        <div className="advertisment">
          <p>{texts[currentText]}</p>
          <button>Shop Now</button>
        </div>
      </div>
    </main>
  );
}

export default Home;
