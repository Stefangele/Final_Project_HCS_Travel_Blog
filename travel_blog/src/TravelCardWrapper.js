import TravelCard from "./TravelCard";

function TravelCardWrapper() {
  return (
    <div className="column">
      <div className="block">
        <h2 className="title is-2 has-text-centered pt-4">
          The best places on earth
        </h2>
      </div>
      <div className="tile is-ancestor is-flex-wrap-wrap">
        {Array.from(Array(5)).map((_, i) => (
          <TravelCard key={i + 1} id={i + 1} />
        ))}
      </div>
    </div>
  );
}

export default TravelCardWrapper;
