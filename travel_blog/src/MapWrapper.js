import MapOverview from "./MapOverview";

function MapWrapper() {
  return (
    <div className="column">
      <div className="block">
        <h2 className="title is-2 has-text-centered pt-4">
          Places I've been to
        </h2>
        <div>
          <MapOverview />
        </div>
      </div>
    </div>
  );
}

export default MapWrapper;
