import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./map.css";

function MapContactPage() {
  return (
    <Map
      initialViewState={{
        longitude: 10.005935,
        latitude: 53.58645,
        zoom: 14,
      }}
      style={{ width: "100%", height: 500 }}
      mapboxAccessToken={
        "pk.eyJ1IjoiYW5nZWxlc3RmIiwiYSI6ImNsYmRrcXpsODAyZmEzcmxkaDdsb25ycmYifQ.8HZcPY7Qw_pMHxiIlSipPQ"
      }
      mapStyle="mapbox://styles/angelestf/clbf50lon002v15nupgjr7stk"
      cursor="move"
    >
      <Marker longitude={10.005935} latitude={53.58645} anchor="bottom">
        <img src="./red_pin.png" alt="My Home" />
      </Marker>
    </Map>
  );
}

export default MapContactPage;
