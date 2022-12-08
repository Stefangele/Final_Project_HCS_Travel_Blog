import Map, { Marker, NavigationControl, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import travelLocationData from "./travellocations.json";
import "./Map.css";
import { useState } from "react";

function MapOverview() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  return (
    <div>
      <Map
        initialViewState={{
          longitude: 9.99,
          latitude: 53.55,
          zoom: 7,
        }}
        style={{ width: "100%", height: 1000 }}
        mapboxAccessToken={
          "pk.eyJ1IjoiYW5nZWxlc3RmIiwiYSI6ImNsYmRrcXpsODAyZmEzcmxkaDdsb25ycmYifQ.8HZcPY7Qw_pMHxiIlSipPQ"
        }
        mapStyle="mapbox://styles/angelestf/clbf50lon002v15nupgjr7stk"
        cursor="move"
      >
        {travelLocationData.map((travelLocation) => (
          <Marker
            key={travelLocation.id}
            longitude={travelLocation.longitude}
            latitude={travelLocation.latitude}
          >
            <button
              className="marker-button"
              onClick={(e) => {
                e.preventDefault();
                setSelectedMarker(travelLocation);
              }}
            >
              <img src="./pine-tree.png" alt="Tree Marker" />
            </button>
          </Marker>
        ))}
        <NavigationControl style={{ backgroundColor: "#48c78e" }} />
        {selectedMarker ? (
          <Popup
            anchor="top"
            latitude={selectedMarker.latitude}
            longitude={selectedMarker.longitude}
          >
            <div style={{ backgroundColor: "black" }}>
              <h2>{selectedMarker.city}</h2>
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
