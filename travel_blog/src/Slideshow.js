import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import slideshowPictures from "./pictures_slideshow_home.json";
import "./slideshow.css";

function Slideshow() {
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
