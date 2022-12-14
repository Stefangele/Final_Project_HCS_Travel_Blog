import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/map.css";

function NewPostMap() {
  return (
    <Map
      initialViewState={{
        longitude: -0.118092,
        latitude: 51.509865,
        zoom: 10,
      }}
      style={{ width: "100%", height: 200 }}
      mapboxAccessToken={
        "pk.eyJ1IjoiYW5nZWxlc3RmIiwiYSI6ImNsYmRrcXpsODAyZmEzcmxkaDdsb25ycmYifQ.8HZcPY7Qw_pMHxiIlSipPQ"
      }
      mapStyle="mapbox://styles/angelestf/clbf50lon002v15nupgjr7stk"
      cursor="move"
    ></Map>
  );
}

export default NewPostMap;
