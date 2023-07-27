import React, { useState } from "react";
import { ReactComponent as Previous } from "../../assets/images/icons/previous.svg";
import { ReactComponent as Next } from "../../assets/images/icons/next.svg";

function Gallery({ images }) {
  const [image, setImage] = useState(0);

  const imageStyle = {
    transition: `transform 750ms ease-in-out`,
    transform: `translateX(-${image * 100}%)`,
  };

  const next = () => {
    setImage(image === images.length - 1 ? 0 : image + 1);
  };
  const previous = () => {
    setImage(image === 0 ? images.length - 1 : image - 1);
  };

  return (
    <section className="gallery">
      <button id="prev-image" className="previous-img" onClick={previous}>
        <Previous className="gallery-arrow" />
      </button>

      <div className="images-container" style={imageStyle}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="gallery-image"
            aria-hidden
            alt="Image logement"
          ></img>
        ))}
      </div>

      <button id="next-image" className="next-img" onClick={next}>
        <Next className="gallery-arrow" />
      </button>
    </section>
  );
}

export default Gallery;
