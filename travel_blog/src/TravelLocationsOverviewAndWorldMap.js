import TravelCard from "./TravelCard";

function TravelLocationsOverviewAndWorldMap() {
  return (
    <div className="columns">
      <div className="column">
        <div className="block">
          <h2 className="title is-2 has-text-centered pt-4">
            The best places on earth
          </h2>
        </div>
        <div className="tile is-ancestor is-flex-wrap-wrap">
          <TravelCard />
          <TravelCard />
          <TravelCard />
          <TravelCard />
          <TravelCard />
        </div>
      </div>
      <div className="column">
        <div className="block">
          <h2 className="title is-2 has-text-centered pt-4">
            Places I've been to
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TravelLocationsOverviewAndWorldMap;
