import React, { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";
// import geoJson from "./chicago-parks.json";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5nZWxlc3RmIiwiYSI6ImNsYmRrcXpsODAyZmEzcmxkaDdsb25ycmYifQ.8HZcPY7Qw_pMHxiIlSipPQ";

function MapWrapper() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(9.81);
  const [lat, setLat] = useState(53.1);
  const [zoom, setZoom] = useState(6.5);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  // geoJson.features.map((feature) =>
  //   new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
  // );

  return (
    <div className="column">
      <div className="block">
        <h2 className="title is-2 has-text-centered pt-4">
          Places I've been to
        </h2>
        <div>
          <div className="sidebar">
            Längengrad: {lng} | Breitengrad: {lat} | Zoomlevel: {zoom}
          </div>
          <div ref={mapContainer} className="map-container" />
        </div>
      </div>
    </div>
  );
}

export default MapWrapper;
