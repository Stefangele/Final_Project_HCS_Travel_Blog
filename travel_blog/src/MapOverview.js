import Map, { Marker, NavigationControl, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import travelLocationData from "./travellocations.json";
import "./Map.css";
import { useState, useMemo, useEffect } from "react";
import Pin from "./Pin";
import { Link } from "wouter";

function MapOverview() {
  // const [travelLocationData, settravelLocationData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3001/")
  //     .then((result) => result.json())
  //     .then((data) => {
  //       console.log(data);
  //       settravelLocationData(data);
  //     });
  // }, []);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const viewport = {
    longitude: travelLocationData[0]?.longitude,
    latitude: travelLocationData[0]?.latitude,
    zoom: 11,
  };

  const pins = useMemo(
    () =>
      travelLocationData.map((travelLocation) => (
        <Marker
          markerKey={travelLocation.id}
          longitude={travelLocation.longitude}
          latitude={travelLocation.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setSelectedMarker(travelLocation);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );

  return (
    <div>
      <Map
        initialViewState={viewport}
        style={{ width: "100%", height: 1750 }}
        mapboxAccessToken={
          "pk.eyJ1IjoiYW5nZWxlc3RmIiwiYSI6ImNsYmRrcXpsODAyZmEzcmxkaDdsb25ycmYifQ.8HZcPY7Qw_pMHxiIlSipPQ"
        }
        mapStyle="mapbox://styles/angelestf/clbf50lon002v15nupgjr7stk"
        cursor="move"
      >
        <NavigationControl style={{ backgroundColor: "#48c78e" }} />
        {pins}
        {selectedMarker ? (
          <Popup
            anchor="top"
            latitude={selectedMarker.latitude}
            longitude={selectedMarker.longitude}
            maxWidth="900px"
            onClose={() => setSelectedMarker(null)}
          >
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={selectedMarker.image} alt={selectedMarker.city} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src="/author_image_cropped.png" alt="Author" />
                      <p className="is-size-7">Stefan Angele</p>
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-5 has-text-centered">
                      {selectedMarker.city}
                    </p>
                    <p className="is-size-6 has-text-centered">
                      Traveldate: {selectedMarker.traveldate}
                    </p>
                  </div>
                </div>
                <div class="has-text-centered">
                  <Link href={`/cities/${selectedMarker.id - 1}`}>
                    <button className="button is-success">See more</button>
                  </Link>
                </div>
              </div>
            </div>
          </Popup>
        ) : null}
      </Map>
    </div>
  );
}

export default MapOverview;
