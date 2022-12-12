import TravelCard from "./TravelCard";
import travelCardData from "./travellocations.json";

function TravelCardWrapper() {
  return (
    <div className="column">
      <div className="block">
        <h2 className="title is-2 has-text-centered pt-4">
          The best places on earth
        </h2>
      </div>
      <div className="tile is-ancestor is-flex-wrap-wrap">
        {
          Array.from(Array(1)).map((_, i) => (
            <TravelCard key={i} id={i} />
          ))
          // .sort((a, b) => b.traveldate - a.traveldate)
        }
      </div>
    </div>
  );
}

export default TravelCardWrapper;
