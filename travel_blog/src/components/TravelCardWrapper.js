import TravelCard from "./TravelCard";
import { useState, useEffect } from "react";
// import travelCardData from "./travellocations.json";

function TravelCardWrapper() {
  const [travelCardData, settravelCardData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((result) => result.json())
      .then((data) => {
        settravelCardData(data);
      });
  }, []);
  return (
    <div className="column">
      <div className="block">
        <h2 className="title is-2 has-text-centered pt-4">
          The best places on earth
        </h2>
      </div>
      <div className="tile is-ancestor is-flex-wrap-wrap">
        {Array.from(Array(1)).map(
          (_, i) => (
            <TravelCard key={i} id={i} />
          ),
          travelCardData.sort((a, b) => b.traveldate - a.traveldate)
        )}
      </div>
    </div>
  );
}

export default TravelCardWrapper;
