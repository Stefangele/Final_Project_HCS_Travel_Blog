import Map, { Marker, NavigationControl, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import travelLocationData from "./travellocations.json";
import "./Map.css";
import { useState, useMemo } from "react";
import Pin from "./Pin";

function MapOverview() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const pins = useMemo(
    () =>
      travelLocationData.map((travelLocation) => (
        <Marker
          key={travelLocation.id}
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
        initialViewState={{
          longitude: 9.99,
          latitude: 53.55,
          zoom: 7,
        }}
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
            maxWidth="700px"
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
                      <img src="/author_image_cropped.png" alt="Author Image" />
                      <p className="is-size-7">Stefan Angele</p>
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-5 has-text-centered">
                      {selectedMarker.city}
                    </p>
                    <p className="is-size-6 ">{selectedMarker.traveldate}</p>
                  </div>
                </div>
                <div class="box has-text-centered">
                  <button class="button is-success">See more</button>
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

//   longitude={9.99}
//   latitude={53.55}
//   anchor="bottom"
//   onClick={handleMarkerClick}
// >

/* {showPopup && (
          <Popup
            longitude={9.99}
            latitude={53.55}
            anchor="bottom"
            onClose={() => setShowPopup(false)}
          >
            You are here
          </Popup>
        )} */
