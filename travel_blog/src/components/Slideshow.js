import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import "../styles/slideshow.css";

function Slideshow() {
  const [slideshowPictures, setslideshowPictures] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/pictures")
      .then((result) => result.json())
      .then((data) => {
        setslideshowPictures(data);
      });
  }, []);
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
  };
  return (
    <div className="column m-5">
      <h2 className="title is-2 has-text-centered">See my best pictures</h2>
      <div
        className="slide-container"
        style={{
          width: "48vw",
        }}
      >
        <Zoom {...zoomOutProperties}>
          {slideshowPictures.map((slideshowItmes, index) => (
            <>
              <img
                key={index}
                style={{ width: "100%", height: "90vh" }}
                src={slideshowItmes.image}
                alt={slideshowItmes.description}
              />
              <h3 className="subtitle is-5 has-text-centered">
                {slideshowItmes.description}
              </h3>
            </>
          ))}
        </Zoom>
      </div>
    </div>
  );
}

export default Slideshow;
